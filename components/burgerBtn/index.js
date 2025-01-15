import React from "react";
import { burgerBtn, close, open } from "./burgerBtn.module.scss";
import "./burgerBtn.module.scss";

const BurgerBtn = ({ state, toggleBurger }) => {
  return (
    <button
      role="button"
      onClick={toggleBurger}
      className={burgerBtn}
    >
      <span className={state}></span>
      <span className={state}></span>
      <span className={state}></span>
    </button>
  );
};

export default BurgerBtn;
