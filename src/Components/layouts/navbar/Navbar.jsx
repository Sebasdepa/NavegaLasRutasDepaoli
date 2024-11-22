import { Link } from "react-router-dom" 
import CartWidget from '../../common/cartWidget/CartWidget';

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        backgroundColor: "PaleGreen",
      }}
    >
    <Link to="/">
    <img
      src="/asset/img/logoguitarra.png"
      alt="Logo"
      style={{
        height: "50px",
        width: "50px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    />
    </Link>


      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
        }}
      >
        <Link to="category/viento">Viento</Link>
        <Link to="category/cuerdas">Cuerdas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
