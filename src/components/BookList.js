import React, { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, loading } = useBooks();
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  // Filtrar libros según el término de búsqueda
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar libro por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Contenedor de los libros */}
      <div className="book-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))
        ) : (
          <p>No se encontraron libros que coincidan con "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
