import { useState } from "react";
import HomeCard from "./HomeCard";
import Produits from "./Produits";
import ServProd from "./ServprodCard";
import About from "./AboutComponent";
import Avantage from "./Advantage";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col">
      <nav className="bg-white text-gray p-4 fixed w-full z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-gray">
              Mon Logo
            </Link>
          </div>

          {/* Menu Hamburger pour mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          {/* <div className="flex gap-5 max-md:flex-row-reverse"> */}
          <div className="hidden md:flex space-x-6">
            <a href="#produit" className="hover:text-blue block py-2 md:py-0">
              Produits
            </a>
            <a href="#service" className="hover:text-blue block py-2 md:py-0">
              Services
            </a>
            <a href="#about" className="hover:text-blue block py-2 md:py-0">
              A propos
            </a>
            <a href="#avantage" className="hover:text-blue block py-2 md:py-0">
              Avantages
            </a>
            <a href="#footer" className="hover:text-blue block py-2 md:py-0">
              Contacter-nous
            </a>
          </div>
          <div className={` searchButton border-l-2 border-blue pl-3 md:block`}>
            <Link to="/produit">
              <button className="text-gray-700 hover:text-blue-500">
                <svg
                  xmlns='"http://www.w3.org/2000/svg'
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m2.85-6.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z "
                  />
                </svg>
              </button>
            </Link>
          {/* </div> */}
          </div>
        </div>

        {/* Menu mobile (affiché si isMenuOpen est vrai) */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full z-50 bg-white text-gray p-4`}
          >
            <a href="#produit" className="hover:text-blue block py-2 md:py-0">
              Produits
            </a>
            <a href="#service" className="hover:text-blue block py-2 md:py-0">
              Services
            </a>
            <a href="#about" className="hover:text-blue block py-2 md:py-0">
              A propos
            </a>
            <a href="#avantage" className="hover:text-blue block py-2 md:py-0">
              Avantages
            </a>
            <a href="#footer" className="hover:text-blue block py-2 md:py-0">
              Contacter-nous
            </a>
          </div>
      </nav>

      <HomeCard />
      <div id="produit">
        <Produits />
      </div>
      <div id="service">
        <ServProd />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="avantage">
        <Avantage />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Navbar;
