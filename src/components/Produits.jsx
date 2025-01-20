import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from "/images/img1.jpeg";
import img2 from "/images/img2.jpeg";
import img3 from "/images/img3.jpeg";
import img4 from "/images/img4.png";

function Produits() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [img1, img2, img3, img4];

  return (
    <div className="slider-container max-w-7xl mx-auto p-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="p-2 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Produit ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Produits;
