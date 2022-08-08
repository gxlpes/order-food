import styled from "styled-components";

export const CartButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #084d2e;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    opacity: 0.5;
  }
`;

export const Badge = styled.span`
  background-color: #b6ad02;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
  display: flex;
`;
