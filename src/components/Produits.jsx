/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProduitCard from "./ProduitCard";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import img1 from "/images/img1.jpeg";
import img2 from "/images/img2.jpeg";
import img3 from "/images/img3.jpeg";
import img4 from "/images/img4.png";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Produits() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon icon={faChevronRight} size="3x" className={className}
      style={{...style, display: "flex", color:"grey", width:"80px", height:"30px"}}
      onClick={onClick} />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon icon={faChevronLeft} size="3x" className={className}
      style={{...style, display: "flex", color:"grey", width:"80px", height:"30px", zIndex:"200" }}
      onClick={onClick} />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow className={"chevron"}/>,
    prevArrow: <SamplePrevArrow/>,
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

  const images = [{src:img1, titre:"Produit 1"}, {src:img2, titre:"Produit 2"}, {src:img3, titre:"Produit 3"}, {src:img4, titre:"Produit 4"}];

  return (
    <div className="slider-container max-w-7xl mx-auto p-4">
      <Slider {...settings} className="px-10">
        {images.map((element, index) => (
          <ProduitCard key={index} src={element.src} titre={element.titre} className={"w-[19vw] max-md:w-[25vw] max-sm:w-[33vw] flex flex-col my-3 mx-3"}/>
        ))}
      </Slider>
    </div>
  );
}

export default Produits;
