// import React from 'react'
import classes from "../Meals/MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food,Delivered To You</h2>
      <p>
        Choose your favorite meal from our board seleection of available meals
        and enjoy a delicous lunch or dinner at home.{" "}
      </p>
      <p>
        All our meals are cooked with high quality ingridents, just in time and
        of course by experirnced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
