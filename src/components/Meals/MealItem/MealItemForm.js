import { FormContainer } from "./Styles/MealItemFormStyles";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef;

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountConvertNumber = +enteredAmount; // convert string to a number

    if (
      enteredAmountConvertNumber.trim().length === 0 ||
      enteredAmountConvertNumber < 1 ||
      enteredAmountConvertNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountConvertNumber);
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </FormContainer>
  );
};

export default MealItemForm;
