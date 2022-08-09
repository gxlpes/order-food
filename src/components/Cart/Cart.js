import Modal from "../UI/Modal";
import { TotalAmountInfo, ButtonsActions } from "./Styles/CartStyles";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Haha", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <TotalAmountInfo>
        <span>Total Amount</span>
        <span>35.62</span>
      </TotalAmountInfo>
      <ButtonsActions>
        <button className="btn-close" onClick={props.onClose}>
          Close
        </button>
        <button className="btn-order">Order</button>
      </ButtonsActions>
    </Modal>
  );
};

export default Cart;
