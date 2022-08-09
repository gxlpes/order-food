import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import { ContainerIMG, BackgroundIMG, HeaderContainer } from "./Styles/HeaderStyles";

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <h1>Brazilian Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </HeaderContainer>
      <ContainerIMG>
        <BackgroundIMG src={mealsImage} alt="table with brazilian food" />
      </ContainerIMG>
    </>
  );
};

export default Header;
