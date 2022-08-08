import styled from "styled-components";

export const MealItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  align-items: center;

  h3 {
    margin: 0 0 0.25rem 0;
  }

  .formcontainer {
    display: flex;
    flex-direction: column;
  }

  .description {
    font-style: italic;
  }

  .price {
    font-weight: bold;
    color: #0e804c;
    font-size: 1.25rem;
  }
`;
