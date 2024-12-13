import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <h2>Icono</h2>
      <span>{cart.length}</span>
    </Link>
  );
};

export default CartWidget;