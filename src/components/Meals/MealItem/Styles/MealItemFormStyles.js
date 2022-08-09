import styled from "styled-components";

export const FormContainer = styled.form`
  text-align: right;
  width: 8rem;

  button {
    width: 100%;
    text-align: center;
    font: inherit;
    cursor: pointer;
    background-color: #b6ad02;
    border: none;
    color: white;
    padding: 0.4rem 2rem;
    border-radius: 5px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    opacity: 0.5;
  }
`;
