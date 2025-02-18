import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProduitCard from "./ProduitCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Produits() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Ajout de l'état isLoading
  const [maxHeight, setMaxHeight] = useState(0);
  const productRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/produit`
        );
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des produits");
        const data = await response.json();
        setProducts(data.produits.slice(0, 11));
        setIsLoading(false);  // Une fois les produits récupérés, setIsLoading à false
      } catch (error) {
        console.error(error.message);
        setIsLoading(false);  // En cas d'erreur aussi, setIsLoading à false
      }
    };

    fetchProducts();
  }, []);

  // Fonction pour calculer la hauteur maximale des cartes
  useEffect(() => {
    const updateMaxHeight = () => {
      const heights = productRefs.current.map(
        (card) => card?.offsetHeight || 0
      );
      if (heights.length > 0) {
        setMaxHeight(Math.max(...heights));
      }
    };

    setTimeout(updateMaxHeight, 500); // Petit délai pour garantir que tout est bien rendu

    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [products]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronRight}
        size="3x"
        className={className}
        style={{
          ...style,
          display: "flex",
          color: "grey",
          width: "80px",
          height: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="3x"
        className={className}
        style={{
          ...style,
          display: "flex",
          color: "grey",
          width: "80px",
          height: "30px",
          zIndex: "20",
        }}
        onClick={onClick}
      />
    );
  }

  const handleProductClick = (id) => navigate(`/products/${id}`);

  const settings = {
    dots: true,
    infinite: products.length > 4,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 972,
        settings: {
          slidesToShow: 3,
          infinite: products.length > 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: products.length > 2,
        },
      },
    ],
  };

  return (
    <div className="produits slider-container max-w-7xl mx-auto bg-[url('/img/25916.jpg')] bg-no-repeat bg-contain bg-right bg-fixed h-auto">
      {/* Affichage du spinner si isLoading est vrai */}
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <Slider {...settings} className="px-10">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (productRefs.current[index] = el)}
              onClick={() => handleProductClick(product.id)}
              className="cursor-pointer w-[5] max-md:w-[25vw] max-sm:w-[33vw] flex flex-col my-3"
              style={{ minHeight: `${maxHeight}px`, display: "flex" }} // Forcer la hauteur
            >
              <ProduitCard
                src={
                  product.image_produit
                    ? `${import.meta.env.VITE_APP_API_URL}/storage/${product.image_produit}`
                    : "/img/image-not-found.png"
                }
                reference={product.reference}
                titre={product.nom_produit}
                categorie={
                  product.categorie
                    ? product.categorie.nom_categorie.substring(0, 15) + "..."
                    : ""
                }
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Produits;
