import Modal from "../UI/Modal";
import { TotalAmountInfo, ButtonsActions, CartItemContainer } from "./Styles/CartStyles";
import CartItem from "./CartItem";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`; // amount set in the context via amount in MealItemForm.js

  const hasItemCart = cartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <CartItemContainer>
      {cartCTX.items.map((item) => (
        // send data to each item via props to CartItem.js
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItemContainer>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <TotalAmountInfo>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </TotalAmountInfo>
      <ButtonsActions>
        <button className="btn-close" onClick={props.onClose}>
          Close
        </button>
        {hasItemCart && <button className="btn-order">Order</button>}
      </ButtonsActions>
    </Modal>
  );
};

export default Cart;
