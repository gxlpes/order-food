import Header from "./components/Layout/Header";
import { GlobalStyles } from "./GlobalStyles";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
