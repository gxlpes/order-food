import { MealItemLi } from "./Styles/MealItemStyles";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

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
