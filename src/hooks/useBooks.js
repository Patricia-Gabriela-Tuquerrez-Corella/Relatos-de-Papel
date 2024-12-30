import { useEffect, useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBooks([
        {
          id: "1",
          title: "El Quijote",
          author: "Miguel de Cervantes",
          rating: 4.8,
          price: 15.99,
          description: "Una de las obras más importantes de la literatura española.",
        },
        {
          id: "2",
          title: "Cien años de soledad",
          author: "Gabriel García Márquez",
          rating: 4.9,
          price: 20.5,
          description: "Una historia épica sobre la familia Buendía en Macondo.",
        },
        {
          id: "3",
          title: "La sombra del viento",
          author: "Carlos Ruiz Zafón",
          rating: 4.7,
          price: 18.75,
          description: "Un misterio literario en la Barcelona del siglo XX.",
        },
        {
          id: "4",
          title: "1984",
          author: "George Orwell",
          rating: 4.6,
          price: 14.99,
          description: "Una visión distópica de un mundo controlado por el Gran Hermano.",
        },
        {
          id: "5",
          title: "El Principito",
          author: "Antoine de Saint-Exupéry",
          rating: 4.9,
          price: 10.0,
          description: "Un cuento poético y filosófico sobre la vida y la amistad.",
        },
        {
          id: "6",
          title: "Matar a un ruiseñor",
          author: "Harper Lee",
          rating: 4.5,
          price: 12.99,
          description: "Un clásico sobre la justicia y la injusticia en el sur de los Estados Unidos.",
        },
      ]);
      setLoading(false);
    }, 2500);
  }, []);

  return { books, loading };
};
