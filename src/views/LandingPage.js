import React from "react";
import useRedirection from "../hooks/useRedirection";

const LandingPage = () => {
  useRedirection("/home", 5000);

  return (
    <div className="landing-page">
      <h1>Bienvenido a la Librería Relatos de Papel</h1>
      <p>Serás redirigido a la página principal en un segundos...</p>
    </div>
  );
};

export default LandingPage;
