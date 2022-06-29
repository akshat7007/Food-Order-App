import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
<Cart/>   
      <Header />
      <main>
        <Meals />
        {/* <MealItemForm/> */}
      </main>
    </Fragment>
  );
}

export default App;