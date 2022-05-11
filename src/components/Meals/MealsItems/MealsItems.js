import { React, useContext } from "react";
import classes from "./MealsItems.module.css";
import MealItemForm from "./MealItemForm";
import CardContext from "../../../store/CardContext";

const MealsItems = (props) => {
  const cartCtx = useContext(CardContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItems;