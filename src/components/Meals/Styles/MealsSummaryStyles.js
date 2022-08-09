import styled from "styled-components";

export const Summary = styled.div`
  text-align: left;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -40rem;
  position: relative;
  background-color: #58453f;
  color: white;
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    text-align: left;
    font-size: clamp(0.5vw + 0.5rem, 1vw + 2rem, 1vw + 3rem);
    margin-top: 0;
  }
`;
