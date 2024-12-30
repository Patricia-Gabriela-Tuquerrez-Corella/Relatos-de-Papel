import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import { useCart } from "../context/CartContext"; // Importa el hook del carrito

const BookPage = () => {
  const { id } = useParams();
  const { books, loading } = useBooks();
  const { addToCart } = useCart(); // Obtén la función para añadir al carrito

  if (loading) {
    return <p>Cargando detalles del libro...</p>;
  }

  const book = books.find((b) => b.id === id);

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div className="book-details">
      <h1 className="book-title">{book.title}</h1>
      <p className="book-author">Autor: {book.author}</p>
      <p className="book-rating">Calificación: {book.rating} / 5</p>
      <p className="book-price"><strong>Precio:</strong> ${book.price.toFixed(2)}</p>
      <p className="book-description">Descripción: {book.description}</p>
      <button onClick={() => addToCart(book)}>Añadir al carrito</button>
    </div>
  );
};

export default BookPage;
