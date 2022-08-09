import styled from "styled-components";

export const FormContainer = styled.form`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #b6ad02;
    border: none;
    color: white;
    padding: 0.4rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    opacity: 0.5;
  }
`;
