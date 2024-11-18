import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/layouts/navbar/Navbar';
import ItemListContainer from "./Components/pages/ItemListContainer/ItemListContainer";
import Cart from "./Components/pages/cart/Cart";
import ItemDetail from "./Components/pages/itemDetail/ItemDetail";
import Checkout from "./Components/pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// La app no me renderiza, pero tampoco me muestra un error.. use como base el codigo de las clases.
// Cuando arranque a implemetar las rutas con React-Router la pagina quedo en blanco y no supe como solucionarlo.
//