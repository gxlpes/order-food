import { Badge, CartButton } from "./HeaderCartButtonStyles";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <CartButton>
      <CartIcon />
      <span>Your Cart</span>
      <Badge>3</Badge>
    </CartButton>
  );
};

export default HeaderCartButton;