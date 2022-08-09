import { MealItemLi } from "./Styles/MealItemStyles";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext); // to add a meal item via addItem in cart-context.js

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      // sending all data to CartProvider.js as "item"
      id: props.id,
      name: props.name,
      amount: amount, // received from MealItemForm.js via props
      price: props.price,
    });
  };

  return (
    <MealItemLi>
      <div className="data">
        <h3>{props.name}</h3>
        <p className="description">{props.description}</p>
        <p className="price">{price}</p>
      </div>
      <div className="formcontainer">
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </MealItemLi>
  );
};

export default MealItem;
