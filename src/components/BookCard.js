import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importa el hook del carrito

const BookCard = ({ id, title, author, price }) => {
  const { addToCart } = useCart(); // Obtén la función para añadir al carrito

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Autor: {author}</p>
      <p>Precio: ${price.toFixed(2)}</p>
      <div>
        <button onClick={() => addToCart({ id, title, author, price })}>Añadir al carrito</button>
        <Link to={`/books/${id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
