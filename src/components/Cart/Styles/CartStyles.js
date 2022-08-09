import styled from "styled-components";

export const CartItemContainer = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: scroll;
`;

export const TotalAmountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const ButtonsActions = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0.5rem 3rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  button:hover,
  button:active {
    opacity: 0.5;
  }

  .btn-close {
    color: #3f3f3f;
    border: 1px solid #ccc;
  }

  .btn-order {
    background-color: #0e804c;
    color: white;
  }
`;
