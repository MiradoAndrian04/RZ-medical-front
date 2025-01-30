/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/produit");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des produits");
        }
        const data = await response.json();
        console.log(data.produits);
        
        setProducts(data.produits.slice(0, 11));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProducts();
  }, []);

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
          zIndex: "200",
        }}
        onClick={onClick}
      />
    );
  }

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow className={"chevron"} />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container max-w-7xl mx-auto p-4 bg-[url('/img/25916.jpg')] bg-no-repeat bg-contain bg-right bg-fixed h-auto">
      <Slider {...settings} className="px-10">
        {products.map((product, index) => (
          <div key={index} onClick={() => handleProductClick(product.id)} className="cursor-pointer">
            <ProduitCard
              src={`${import.meta.env.VITE_APP_API_URL}storage/${product.image_produit}`} // Utilisez la variable d'environnementproduct.image}
              titre={product.nom_produit}
              className={
                "w-[19vw] max-md:w-[25vw] max-sm:w-[33vw] flex flex-col my-3 mx-3"
              }
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Produits;
