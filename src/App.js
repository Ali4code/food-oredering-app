import Header from "./Components/Layouts/Header";
import TitleCard from "./Components/Layouts/TitleCard";
import Meals from "./Components/Meals/Meals";
import { CartContextProvider } from "./store/cart-context";


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <Header />
<TitleCard />
<Meals/>
      </CartContextProvider>
    </div>
  );
}

export default App;
