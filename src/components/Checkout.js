import React from "react";
import { useCart } from "../context/CartContext"; // Importar el contexto del carrito
import { useNavigate } from "react-router-dom"; // Para redirigir

const Checkout = () => {
  const { cart, clearCart } = useCart(); // Obtener funciones del carrito
  const navigate = useNavigate();

  // Calcular el total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("¡Compra realizada con éxito!");
    clearCart(); // Vaciar el carrito
    navigate("/home"); // Redirigir a la página principal
  };

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
