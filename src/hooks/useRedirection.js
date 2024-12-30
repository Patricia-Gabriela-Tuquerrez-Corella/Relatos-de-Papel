import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Hook para manejar redirección automática.
 * @param {string} path - Ruta a la que se redirige.
 * @param {number} delay - Tiempo en milisegundos antes de redirigir.
 */
const useRedirection = (path, delay) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(path); // Redirige a la ruta especificada.
    }, delay);

    // Limpia el temporizador al desmontar.
    return () => clearTimeout(timer);
  }, [path, delay, navigate]);
};

export default useRedirection;
