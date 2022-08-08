import { MealItemLi } from "./Styles/MealItemStyles";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; // format the price value

  return (
    <MealItemLi>
      <div className="data">
        <h3>{props.name}</h3>
        <p className="description">{props.description}</p>
        <p className="price">{price}</p>
      </div>
      <div className="formcontainer">
        <MealItemForm />
      </div>
    </MealItemLi>
  );
};

export default MealItem;
