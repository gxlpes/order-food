import { CardWrapper } from "./Styles/CardStyles";

const Card = (props) => {
  // props needed to access data from children
  return <CardWrapper>{props.children}</CardWrapper>;
};

export default Card;
