import Modal from "../UI/Modal";
import { TotalAmountInfo, ButtonsActions } from "./Styles/CartStyles";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItemCart = cartCTX.items.length > 0;

  const cartItems = (
    <ul>
      {cartCTX.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
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
