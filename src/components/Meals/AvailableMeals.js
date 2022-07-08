import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "../Meals/AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError]=useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-c6d9e-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error('Something Went Wrong!!!')
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

  
    fetchMeals().catch((error) => {
      setIsLoading(false)
      setError(error.message)  
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className={classes.position}>
          <div className={classes.loader}></div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <div className={classes.MealsError}>
          <p>{ error}</p>
        </div>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
