import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importar el contexto del carrito
import { FaShoppingCart } from "react-icons/fa"; // Importar el icono de carrito

const Header = () => {
  const { cart } = useCart(); // Obtener el carrito

  return (
    <header className="header">
      <nav className="navbar">
        <h1>Librería Relatos de Papel</h1>
        <ul className="nav-links">
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li className="cart-container">
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart size={20} />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
