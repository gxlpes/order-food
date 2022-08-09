import { CartItemLi } from "./Styles/CartItemStyles";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <CartItemLi>
      <div className="left-side">
        <span className="amount">x {props.amount}</span>
        <div className="name-price">
          <h2>{props.name}</h2>
          <span className="price">{price}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </CartItemLi>
  );
};

export default CartItem;
