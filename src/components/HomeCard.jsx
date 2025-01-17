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
    autoplaySpeed: 5000,
    fade:true,
    // pauseOnHover: true
  };
  
const [isOpen , setIsOpen] = useState(false);
  return (
    <div>
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto flex items-center justify-between py-4 px-6'>
            <div className='font-bold text-gray-700 border border-gray-300 px-4 py-2'>
                VOTRE LOGO
            </div>

            <button className='text-gray-700 block md:hidden' onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns='http://www.w3.org/2000svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'/>    
                </svg>    
            </button> 
            <div className=' flex gap-7 align-center'>
            <div className={`${
                    isOpen ? "block" : "hidden"
                 } md:flex md:space-x-6 text-gray-700 font-semibold`}
            >
                <a href='' className='hover:text-blue block py-2 md:py-0'>Produits</a>
                <a href='' className='hover:text-blue block py-2 md:py-0'>Services</a>
                <a href='' className='hover:text-blue block py-2 md:py-0'>A propos</a>
                <a href='' className='hover:text-blue block py-2 md:py-0'>Avantages</a>
                <a href='' className='hover:text-blue block py-2 md:py-0'>Contacter-nous</a>
            </div>
            <div className={`border-l-2 border-blue pl-5 md:block ${isOpen ? "block" : "hidden"}`}>
                <button className='text-gray-700 hover:text-blue-500'>
                    <svg xmlns='"http://www.w3.org/2000/svg'  fill='none' viewBox='0 0 24 24' strokeWidth= '2' stroke='currentColor' className='w-6 h-6'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-4.35-4.35m2.85-6.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z '
                        />
                    </svg>
                </button>
            </div>
            </div>
        </div>
    </nav>
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
