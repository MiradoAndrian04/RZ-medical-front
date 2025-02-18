import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userAtom from "../atoms/userAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useRecoilValue(userAtom);
  const setUser = useSetRecoilState(userAtom);
  const menuRef = useRef(null);

  const hamburgerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      // Si on est déjà sur la page d'accueil, scroll directement
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si on n'est pas sur la page d'accueil, redirige et scroll après
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Délai pour attendre que la page soit rendue
    }
  };

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    console.log(isMenuOpen);  // Affiche la valeur mise à jour
  }, [isMenuOpen]); 

  const handleLogout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("admin-user"));
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/logout`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la déconnexion");
      }

      setUser(null);
      localStorage.removeItem("admin-user");
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      alert("Une erreur est survenue lors de la déconnexion.");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmLogout = () => {
    handleLogout();
    closeModal();
  };
  const handleClickOutside = (event) => {
    // Si l'utilisateur clique en dehors du menu ET du bouton hamburger
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=" fixed top-0  flex flex-col z-50 w-full max-w-[100vw]">
      <nav className="bg-white text-gray p-1 h-[75px] max-sm:h-[60px] w-full">
        <div className="flex items-center justify-between max-w-[95vw] mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-gray">
              <img
                src="/img/logoRZ.png"
                alt="logo RZ"
                className="w-[100px] ml-3 max-sm:w-[70px] max-sm:pt-1 max-sm:ml-1"
              />
            </Link>
          </div>

          {/* Menu Hamburger pour mobile */}
          <div className="md:hidden">
            <button  ref={hamburgerRef} onClick={toggleMenu} className="text-gray">
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
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {user ? (
            <>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-blue block py-2 md:py-0">
                  Accueil
                </Link>
                <Link
                  to="/products"
                  className="hover:text-blue block py-2 md:py-0"
                >
                  Produits
                </Link>
                <Link
                  to="/admin/add-product"
                  className="hover:text-blue block py-2 md:py-0"
                >
                  Ajout de produit
                </Link>
              </div>
              <Menu
                as="div"
                className=" hidden md:inline-block relative  text-left"
              >
                <MenuButton className="bg-pink-800 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                  RZ
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <Link
                        to="/admin/account-settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightblue data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        <FontAwesomeIcon
                          icon={faCog}
                          size="sm"
                          className="mr-2"
                        />
                        Paramètres du compte
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={openModal}
                        className="block px-4 py-2 text-sm text-left text-gray-700 hover:bg-lightblue data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none w-full"
                      >
                        <FontAwesomeIcon
                          icon={faSignOutAlt}
                          size="sm"
                          className="mr-2"
                        />
                        Déconnexion
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
              <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmation de déconnexion"
                className="modal-content z-50"
                overlayClassName="modal-overlay"
                shouldCloseOnOverlayClick={true} // Permet de fermer en cliquant à l'extérieur
                bodyOpenClassName=""
              >
                <h2 className="text-xl font-semibold mb-4">
                  Confirmation de déconnexion
                </h2>
                <p className="mb-6">
                  Êtes-vous sûr de vouloir vous déconnecter ?
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={confirmLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Oui
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    Non
                  </button>
                </div>
              </ReactModal>
            </>
          ) : (
            <>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/products"
                  className="hover:text-blue block py-2 md:py-0"
                >
                  Produits
                </Link>
                <ul className="flex space-x-6">
                  <li
                    onClick={() => handleScroll("services")}
                    className="cursor-pointer hover:text-blue"
                  >
                    Services
                  </li>
                  <li
                    onClick={() => handleScroll("about")}
                    className="cursor-pointer hover:text-blue"
                  >
                    Apropos
                  </li>
                  <li
                    onClick={() => handleScroll("avantage")}
                    className="cursor-pointer hover:text-blue"
                  >
                    Avantages
                  </li>
                </ul>
                <Link to="/contact" className="hover:text-blue">
                  Contacter-nous
                </Link>
              </div>
              <div
                className={` searchButton border-l-2 border-blue pl-3 md:block`}
              >
                <Link to="/products">
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
            </>
          )}
        </div>

        {/* Menu mobile (affiché si isMenuOpen est vrai) */}
        <div
          ref={menuRef}
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 max-sm:top-14 left-0 w-full z-50 bg-white text-gray p-4`}
        >
          {user ? (
            <>
              <Link
                to="/"
                className="hover:text-blue block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>

              <Link
                to="/products"
                className="hover:text-blue block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/admin/add-product"
                className="hover:text-blue block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Ajout de produit
              </Link>
              <hr className="my-3" />
              <Link
                to="/admin/account-settings"
                className="hover:text-blue block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faCog} size="sm" className="mr-2" />
                Paramètres du compte
              </Link>
              <button
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
                className="hover:text-blue block py-2 md:py-0"
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  size="sm"
                  className="mr-2"
                />
                Deconnection
              </button>
            </>
          ) : (
            <>
              <Link
                to="/products"
                className="hover:text-blue block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <ul className="flex flex-col">
                <li
                  onClick={() => {
                    handleScroll("services");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer hover:text-blue block py-2 md:py-0"
                >
                  Services
                </li>
                <li
                  onClick={() => {
                    handleScroll("about");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer hover:text-blue block py-2 md:py-0"
                >
                  Apropos
                </li>
                <li
                  onClick={() => {
                    handleScroll("avantage");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer hover:text-blue block py-2 md:py-0"
                >
                  Avantages
                </li>
              </ul>

              <Link
                to="/contact"
                className="hover:text-blue block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacter-nous
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
