import Header from "./components/Layout/Header";
import { GlobalStyles } from "./GlobalStyles";
import Meals from "./components/Meals/Meals";
import Cart from "../src/components/Cart/Cart";

function App() {
  return (
    <>
      <GlobalStyles />
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
