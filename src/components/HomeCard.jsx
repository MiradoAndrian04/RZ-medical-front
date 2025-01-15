import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeCard.css";
const HomeCard = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:1500,
    autoplaySpeed: 10000,
    fade:true,
    // pauseOnHover: true
  };
  return (
    <div >
      <div className="slider-container  relative overflow-hidden">
        {/* <h2>Auto Play {"&"} Pause with buttons</h2> */}

        <Slider
          asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
          {...settings}
          className=" slider1 w-[100vw]"
        >
          <div className="bg-[url('/img/equiper-pharmacie-avec-rdm.jpg')] bg-no-repeat bg-cover w-[100vw] h-[40vw]  relative">
            <div className="absolute w-[100vw] h-full bg-black opacity-35 z-10"></div>

            <h1 className="titreHome text-white text-[45px] max-lg:text-2xl font-semibold italic absolute left-[5%] top-[15%] leading-[1.5] w-[55%] max-sm:w-[90%]">
              Bienvenue sur RZ Medical, <br />votre partenaire en équipement médical
            </h1>
          </div>
          <div className="bg-[url('/img/IBIOM_-_Fauteuil_de_dialyse_TRIAD_HMR.jpg')] bg-no-repeat bg-cover w-[100vw] h-[40vw] relative">
            <div className="absolute w-[100vw] h-full bg-black opacity-35 z-10"></div>

            <h1 className="titreHome text-white text-[45px] max-lg:text-2xl font-semibold italic absolute left-[5%] top-[15%] leading-[1.5] w-[55%] max-sm:w-[90%]">
            Découvrez une large gamme d’équipements médicaux pour accompagner vos soins.
            </h1>
          </div>
          <div className="bg-[url('/img/materiel.jpg')] bg-no-repeat bg-cover w-[100vw] h-[40vw] relative">
            <div className="absolute w-[100vw] h-full bg-black opacity-35 z-10"></div>

            <h1 className="titreHome text-white text-[45px] max-lg:text-2xl font-semibold italic absolute left-[5%] top-[15%] leading-[1.5] w-[55%] max-sm:w-[90%]">
            Nous sommes là pour répondre à vos besoins avec des solutions fiables et adaptées.
            </h1>
          </div>
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={slider => (sliderRef2 = slider)}
          {...settings}
          className="w-[45%] p-3 aspect-square rounded-full bg-white "
        >
          <div className="bg-[url('/img/docteur.jpeg')] bg-no-repeat bg-cover scale-x-[-1] bg rounded-full aspect-square">
          </div>
          <div className="bg-[url('/img/materiel2.jpg')] bg-no-repeat bg-cover bg-right-bottom scale-x-[-1]  rounded-full aspect-square">
          </div>
          <div className="bg-[url('/img/docteur2.jpg')] bg-no-repeat bg-cover bg-center rounded-full aspect-square">
          </div>
        </Slider>
        {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={play}>
            Play
          </button>
          <button className="button" onClick={pause}>
            Pause
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HomeCard;
