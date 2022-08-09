import { InputWrapper } from "./Styles/InputStyles";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  //usage of forwardRef to make the custom component in MealItemForm.js work with useRef
  //using spread operator to copy all props config from the input object received in this input, like {props.input.id} should be received
  // check MealItemForm input to see all the props being sent to this child component
  return (
    <InputWrapper>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </InputWrapper>
  );
});

export default Input;
