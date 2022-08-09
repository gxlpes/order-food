import styled from "styled-components";

export const CartButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #084d2e;
  color: white;
  padding: 0.75rem 1rem;
  width: clamp(1rem + 1vw, 5rem + 5vw, 10vw +15rem);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  animation: ${(props) => props.animate} 300ms;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const Badge = styled.span`
  background-color: #b6ad02;
  padding: 0.25rem 1rem;
  border-radius: 5px;
  margin-left: 1rem;
  font-weight: bold;
  display: flex;
`;
