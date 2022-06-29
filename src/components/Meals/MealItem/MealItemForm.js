import { useRef, useState } from "react";
import React from "react";
import classes from "../MealItem/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amontIsValid, setAmontIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmontIsValid(false);
      return; 
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount:"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          text: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    {!amontIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
