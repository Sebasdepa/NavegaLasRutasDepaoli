import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <h2>🛒 <span>0</span> </h2>
      {/* <a href="/cart">Ir al carrito</a> */}
      {/* <Link to="/cart"> Ir al carrito </Link> */}
    </Link>
  );
};

export default CartWidget;