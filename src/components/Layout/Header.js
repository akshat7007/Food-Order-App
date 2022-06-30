import React from "react";
import mealsImage from "../../assests/meals.jpg";
// import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Reat Meals</h1>
        {/* <img src={<CartIcon />} alt="" /> */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Oops!!!" />
      </div>
    </>
  );
};

export default Header;
