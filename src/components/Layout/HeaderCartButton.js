import { Badge, CartButton } from "./Styles/HeaderCartButtonStyles";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsClicked, setBtnIsClicked] = useState(false);
  const cartCTX = useContext(CartContext);
  const { items } = cartCTX;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsClicked(true);

    const timer = setTimeout(() => {
      setBtnIsClicked(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <CartButton onClick={props.onClick} animate={btnIsClicked ? "bump" : " "}>
      <CartIcon />
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </CartButton>
  );
};

export default HeaderCartButton;
