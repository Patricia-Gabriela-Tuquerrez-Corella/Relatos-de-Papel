import React from "react";
import { useCart } from "../context/CartContext"; // Importar el contexto del carrito
import { useNavigate } from "react-router-dom"; // Para redirigir al checkout
import { FaTrashAlt } from "react-icons/fa"; // Icono para eliminar

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Obtener funciones del contexto
  const navigate = useNavigate();

  // Calcular el total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <span className="cart-title">{item.title}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button onClick={() => navigate("/checkout")}>Ir a Checkout</button>
    </div>
  );
};

export default Cart;
