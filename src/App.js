import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/layouts/navbar/Navbar';
import ItemListContainer from "./Components/pages/ItemListContainer/ItemListContainer";
import Cart from "./Components/pages/cart/Cart";
import ItemDetail from "./Components/pages/itemDetail/ItemDetail";
import Checkout from "./Components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider> 
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
