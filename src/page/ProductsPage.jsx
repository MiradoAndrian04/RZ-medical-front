import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { Outlet, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { productAtom } from "../atoms/productsAtom";
import { toast, ToastContainer } from "react-toastify";

function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); // État pour la catégorie active
  const [query, setQuery] = useState('');
  const setProducts = useSetRecoilState(productAtom);
  // const products = useRecoilValue(productAtom);
  const menuRef = useRef(null); // Ref pour le menu
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("/api/produit",{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des produits");
      }
      const data = await response.json();
      
      setProducts(data.produits); // Mettre à jour l'état avec les produits récupérés
      
      navigate("/products"); // Rediriger vers ProduitsAll
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      
      const response = await fetch(`/api/categorie/${categoryId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }, // Envoyer categoryId dans le corps de la requête
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des produits par catégorie");
      }
      const data = await response.json();
      
      setProducts(data.categorie.produits); // Mettre à jour l'état avec les produits récupérés
      navigate("/products"); // Rediriger vers ProduitsAll
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`/api/produit?recherche=${encodeURIComponent(searchTerm)}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la recherche");
      }
      const data = await response.json();
      if (data.message && data.message === "Aucun produit trouvé.") {
        toast.error("Aucun produit trouvé.");
        // Vous pouvez afficher un message d'alerte à l'utilisateur ou faire autre chose ici
        return;
      }
      
      setProducts(data.produits); // Mettre à jour l'état global avec les résultats de recherche
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Si l'utilisateur a saisi quelque chose, effectuer la recherche
    if (value.trim() !== "") {
      debounce(() => handleSearch(value), 500)(); // Déclenche la recherche avec un délai de 500 ms
    } else {
      fetchAllProducts(); // Charger tous les produits si le champ de recherche est vide
    }
  };

  const debounce = (func, delay) => {
    let timerId;
    return () => {
      clearTimeout(timerId); // Efface le précédent timer
      timerId = setTimeout(() => {
        func(); // Exécute la fonction après le délai
      }, delay);
    };
  };

  useEffect(() => {
    fetchAllProducts(); // Charger tous les produits au montage
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categorie"); // Remplacez par votre API
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des catégories");
        }
        const data = await response.json();
        setCategories(data.categories); // Mettre à jour les catégories
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories(); // Charger les catégories au montage
  }, []);

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

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id); // Mettre à jour la catégorie active
    fetchProductsByCategory(category.id); // Récupérer les produits par catégorie
  };

  // Réorganiser les catégories pour mettre la catégorie active en tête de liste
  
  const sortedCategories = activeCategory
    ? [categories.find((cat) => cat.id === activeCategory), ...categories.filter((cat) => cat.id !== activeCategory)]
    : categories;

    // if (!Array.isArray(sortedCategories)) {
    //   return <div>Erreur: Les catégories ne sont pas disponibles.</div>;
    // }
    
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
        <h1 className="text-2xl font-semibold cursor-pointer text-blue" onClick={fetchAllProducts}>Tous nos produits</h1>
        <div className="flex w-[65%] max-md:w-full max-sm:gap-8 lg:justify-end flex-row justify-between">
          <div className="w-[60%] max-sm:w-full relative">
            <input
              type="text"
              placeholder="Rechercher ..."
              value={query}
              onChange={handleChange}
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

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-3 bg-white border border-gray-300 rounded-lg mt-2 w-auto min-w-[200px] max-w-[200px] shadow-md"
              >
                <ul className="flex flex-col">
                  {sortedCategories.map((category) => (
                    <li
                      key={category.id}
                      className={`px-6 py-3 text-start hover:bg-slate-300 text-gray hover:cursor-pointer ${category.id === activeCategory ? 'bg-lightblue' : ''}`}
                      onClick={() => {
                        handleCategoryClick(category);
                        
                        setIsMenuOpen(false);
                      }}
                    >
                      {category.nom_categorie}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className=" w-full h-auto px-3">

        <Outlet />
        </div>
        <div className="flex flex-col p-3 pt-0 w-[30%] h-[500px] max-lg:hidden sticky top-[70px]">
          <div className="w-full h-auto border-[1px] border-grey-300 rounded-lg">
            <div className="w-full h-12 bg-blue rounded-t-md">
              <h1 className="flex justify-center py-2 text-xl font-semibold text-white">Catégories</h1>
            </div>
            <div>
              <ul className="w-full text-center">
                {sortedCategories.map((category) => (
                  <li
                    key={category.id}
                    className={`flex w-full py-3 border-b-[1px] cursor-pointer justify-center hover:bg-lightblue ${category.id === activeCategory ? 'bg-lightblue' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.nom_categorie}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right"/>
    </div>
  );
}

export default ProductsPage;