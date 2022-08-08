import { InputWrapper } from "./Styles/InputStyles";

const Input = (props) => {
  //using spread operator to copy all props config from the input object received in this input, like {props.input.id} should be received
  // check MealItemForm input to see all the props being sent to this child component
  return (
    <InputWrapper>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </InputWrapper>
  );
};

export default Input;
