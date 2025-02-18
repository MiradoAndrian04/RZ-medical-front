import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css"; // Pour ajouter des styles personnalisés

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-page">
      <h1>Oops! Page not found.</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <button className="go-home-button" onClick={goHome}>Retour à l'accueil</button>
    </div>
  );
};

export default NotFoundPage;
