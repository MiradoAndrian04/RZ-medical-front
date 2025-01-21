import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { Outlet } from "react-router-dom";

function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref pour le menu

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-col w-full h-auto bg-white">
      <div className="w-full h-[16vw] ">
        <img
          src="../../public/img/RZ.jpeg"
          alt="Example"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-1 flex-wrap justify-between gap-3  items-center p-3">
        <h1 className="text-2xl font-semibold text-blue">Tous nos produits</h1>
        <div className="flex w-[65%] max-md:w-full max-sm:gap-8 lg:justify-end flex-row justify-between">
          <div className="w-[60%] max-sm:w-full relative">
            <input
              type="text"
              placeholder="Rechercher ..."
              className="w-full py-2 rounded-lg outline-none pl-9  px-3 border-[1px] border-grey-300"
              autoFocus
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="absolute left-3 bottom-[13px] text-gray"
            />
          </div>
          <div className=" menu-category lg:hidden relative w-10">
            <button
              className=" bg-gray-50 border-b border-grey-300 p-2.5 rounded-lg hover:cursor-pointer hover:bg-slate-100"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon
                icon={faCaretSquareDown}
                size="lg"
                className="text-gray"
              />
            </button>

            {/* Menu déroulant pour les options */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-3 bg-white border border-gray-300 rounded-lg mt-2 w-auto max-w-[200px] shadow-md"
              >
                <ul className="flex flex-col">
                  <li
                    className="px-6 py-3 text-center hover:bg-slate-300 text-gray hover:cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Analgesique & Antipyretique
                  </li>
                  <li
                    className="px-6 py-3 text-center hover:bg-slate-300 text-gray hover:cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Antibiotiques
                  </li>
                  <li
                    className="px-6 py-3 text-center hover:bg-slate-300 text-gray hover:cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Antihistaminiques
                  </li>
                  <li
                    className="px-6 py-3 text-center hover:bg-slate-300 text-gray hover:cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cardiovasculaires
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        {/* <div className="flex flex-col flex-1 h-[400px] bg-white "> */}
        <Outlet/>

        {/* </div> */}
        <div className="flex flex-col p-3 pt-0 w-[30%] h-[500px] max-lg:hidden">
          <div className="w-full h-auto border-[1px] border-grey-300 rounded-lg">
            <div className="w-full h-12 bg-blue rounded-t-md">
              <h1 className="flex justify-center py-2 text-xl font-semibold text-white">
                Catégories
              </h1>
            </div>
            <div>
              <ul className="w-full text-center">
                <a
                  href="#"
                  className="flex w-full py-3 border-b-[1px] justify-center hover:bg-lightblue"
                >
                  <li>Analgésiques & Antipyrétiques</li>
                </a>
                <a
                  href="#"
                  className="flex w-full py-3 border-b-[1px] justify-center hover:bg-lightblue"
                >
                  <li>Antibiotiques</li>
                </a>
                <a
                  href="#"
                  className="flex w-full py-3 border-b-[1px] justify-center hover:bg-lightblue"
                >
                  <li>Antihistaminiques</li>
                </a>
                <a
                  href="#"
                  className="flex w-full py-3 border-b-[1px] justify-center hover:bg-lightblue"
                >
                  <li>Cardiovasculaires</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
