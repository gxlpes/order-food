import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: clamp(0.5vw + 0.5rem, 0.5vw + 0.5rem, 5vw + 5rem);
  height: 5rem;
  background-color: #0e804c;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const ContainerIMG = styled.div`
  width: 100%;
  height: 50rem;
  z-index: 0;
  overflow: hidden;
`;

export const BackgroundIMG = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-3deg) translateY(-4rem) translateX(-1rem);
`;
