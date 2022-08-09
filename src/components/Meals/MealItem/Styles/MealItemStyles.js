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
    margin-right: 2rem;
    font-style: italic;
    word-break: break-word;
  }

  .price {
    font-weight: bold;
    color: #0e804c;
    font-size: 1.25rem;
  }
`;
