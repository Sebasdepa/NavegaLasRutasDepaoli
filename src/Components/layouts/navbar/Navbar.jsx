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
      <img src="/asset/img/logoguitarra.png" alt="Logo" 
      style={{
            height: "50px", 
            width: "50px", 
            borderRadius: "10px", 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }} 
    /> 

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
        }}
      >
        <li>Todos</li>
        <li>Viento</li>
        <li>Cuerdas</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
