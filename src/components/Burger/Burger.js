import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKeys => {
      return [...Array(props.ingredients[ingredientKeys])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKeys + i} type={ingredientKeys} />
        );
      });
    })
    .reduce((prev, currentElement) => {
      return prev.concat(currentElement);
    }, []);
  //check if the ingredients are empty to tell the use to add ingredients
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
