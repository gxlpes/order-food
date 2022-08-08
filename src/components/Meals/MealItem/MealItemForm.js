import { FormContainer } from "./Styles/MealItemFormStyles";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <FormContainer>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }} // usage of min and max to make a validation of the input amount
      />
      <button>Add Meal</button>
    </FormContainer>
  );
};

export default MealItemForm;
