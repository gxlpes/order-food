import { Badge, CartButton } from "./Styles/HeaderCartButtonStyles";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <CartButton onClick={props.onClick}>
      <CartIcon />
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </CartButton>
  );
};

export default HeaderCartButton;
