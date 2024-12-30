import React, { createContext, useContext, useState } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Hook para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado global del carrito

  // Función para añadir un libro al carrito
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
    alert(`¡"${book.title}" ha sido añadido al carrito!`);
  };

  // Función para eliminar un libro del carrito
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
