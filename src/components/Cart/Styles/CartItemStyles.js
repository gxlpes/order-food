import styled from "styled-components";

export const CartItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #3f3f3f;
  padding: 1rem 0;
  margin: 1rem 0;

  .cart-item h2 {
    margin: 0 0 0.5rem 0;
    color: #3f3f3f;
  }

  .left-side {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .name-price {
    display: flex;
    flex-direction: column;
  }

  .price {
    font-weight: bold;
    color: #0e804c;
  }

  .amount {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #3f3f3f;
  }

  .actions {
    display: flex;
    flex-direction: column;
  }

  button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: white;
    border: none;
    width: 3rem;
    text-align: center;
    border-radius: 1px;
    background-color: #b6ad02;
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    .actions {
      flex-direction: row;
    }
  }
`;
