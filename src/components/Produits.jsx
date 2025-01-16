import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProduitCard from "./ProduitCard";


import img1 from "/images/img1.jpeg";
import img2 from "/images/img2.jpeg";
import img3 from "/images/img3.jpeg";
import img4 from "/images/img4.png";

function Produits() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    responsive: [
      {
        breakpoint: 1024,
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
      <Slider {...settings}>
        {images.map((element, index) => (
          <ProduitCard key={index} src={element.src} titre={element.titre} className={"w-[2vw]"}/>
        ))}
      </Slider>
    </div>
  );
}

export default Produits;
