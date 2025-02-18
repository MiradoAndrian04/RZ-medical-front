import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPen,
  faTrashAlt,
  faCheck,
  faCaretSquareDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productAtom } from "../atoms/productsAtom";
import { toast, ToastContainer } from "react-toastify";
import userAtom from "../atoms/userAtom";
import { errorAtom } from "../atoms/errorAtom";

function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); // État pour la catégorie active
  const [query, setQuery] = useState("");
  const setProducts = useSetRecoilState(productAtom);
  const menuRef = useRef(null); // Ref pour le menu
  const navigate = useNavigate();
  const [isEditingCategory, setIsEditingCategory] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const user = useRecoilValue(userAtom);
  const setError = useSetRecoilState(errorAtom);
  const location = useLocation();
  const searchTimeout= useRef(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
const [categoryToDelete, setCategoryToDelete] = useState(null);



  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/produit`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des produits");
      }
  
      const data = await response.json();
      setError(null);
      setProducts(data.produits);
  
      // Vérifier si l'URL est exactement "/products" avant de rediriger
      if (location.pathname === "/products") {
        navigate("/products");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/categorie`); // Remplacez par votre API
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des catégories");
      }
      const data = await response.json();
      setCategories(data.categories); // Mettre à jour les catégories
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim() === "") {
      setError(null);
      setProducts([]);  // Vider les produits affichés
      fetchAllProducts(); // Recharger tous les produits sans erreur
      return; // Sortir immédiatement
    }
    if (location.pathname.startsWith("/products/")) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      return; // Empêcher l'exécution immédiate de la requête
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/produit?recherche=${encodeURIComponent(searchTerm)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Si l'API retourne une erreur 404 ou autre, gérer l'erreur ici
      if (!response.ok) {
        if (response.status === 404) {
          setError("Aucun produit trouvé pour cette recherche.");
        } else {
          throw new Error("Erreur lors de la recherche des produits");
        }
        setProducts([]); // Réinitialiser les produits si une erreur survient
        return; // Quitter après avoir géré l'erreur
      }
  
      const data = await response.json();
      console.log(data)
  
      // Si aucun produit n'est trouvé dans la réponse
      if (data.message && data.message === "Aucun produit disponible.") {
        setError("Aucun produit trouvé.");
        setProducts([]); // Réinitialiser les produits si aucun résultat
        return;
      }
  
      // Réinitialiser l'erreur si des produits sont trouvés
      setError(null);
      setProducts(data.produits);  // Mettre à jour l'état avec les produits trouvés
    } catch (error) {
      setError("Une erreur est survenue pendant la recherche.");
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  
    // Nettoyer le timeout précédent
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
  
    // Définir un nouveau timeout
    searchTimeout.current = setTimeout(() => {
      if (value.trim() !== "") {
        handleSearch(value);
      } else {
        fetchAllProducts();
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);

  // const debounce = (func, delay) => {
  //   let timerId;
  //   return (args) => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(() => func(args), delay);
  //   };
  // };

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id); // Mettre à jour la catégorie active
    fetchProductsByCategory(category.id); // Récupérer les produits par catégorie
    navigate("/products");
    setIsMenuOpen(false); // Fermer le menu après avoir cliqué sur une catégorie
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/categorie/${categoryId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des produits par catégorie");
      }
      const data = await response.json();
      if (!Array.isArray(data.categorie.produits) || data.categorie.produits.length === 0) {
        setError("Aucun produit trouvé pour cette catégorie.");
        return;
      }
      setError(null); // Réinitialiser l'erreur si les produits sont trouvés
      setProducts(data.categorie.produits); // Mettre à jour l'état avec les produits récupérés
      navigate("/products"); // Rediriger vers ProduitsAll
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCategoryEdit = (category) => {
    setIsEditingCategory(category.id);
    setEditedCategoryName(category.nom_categorie);
  };

  const handleCategorySave = async (categoryId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/admin/categorie/${categoryId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin-user")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nom_categorie: editedCategoryName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Erreur lors de la mise à jour de la catégorie"
        );
      }

      // Si la catégorie a bien été mise à jour, on met à jour le state local
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === categoryId
            ? { ...category, nom_categorie: editedCategoryName }
            : category
        )
      );

      // Réinitialiser l'édition
      setIsEditingCategory(null);
      setEditedCategoryName("");
      toast.success("Catégorie mise à jour !");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const openDeleteModal = (categoryId) => {
    setCategoryToDelete(categoryId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = async () => {
    if (categoryToDelete) {
      try {
        // Appelez l'API pour supprimer la catégorie ici
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/admin/categorie/${categoryToDelete}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admin-user")}`,
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Erreur lors de la suppression de la catégorie");
        }
  
        // Mettre à jour l'état local après la suppression
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== categoryToDelete)
        );
  
        // Mettre à jour les produits en supprimant ceux associés
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.categorie_id !== categoryToDelete)
        );
  
        toast.success("Catégorie supprimée et produits associés supprimés !");
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      }
    }
    setIsDeleteModalOpen(false); // Fermer le modal après la suppression
  };

 useEffect(() => {
  if (location.pathname === "/products" && !activeCategory) {
    fetchAllProducts();
  }
}, [location.pathname, activeCategory]);
  useEffect(() => {
    fetchCategories(); // Charger les catégories au montage
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setError(null); // Réinitialiser l'erreur si le menu est fermé
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Réorganiser les catégories pour mettre la catégorie active en tête de liste
  const sortedCategories = categories
  // activeCategory
    // ? [
    //     categories.find((cat) => cat.id === activeCategory),
    //     ...categories.filter((cat) => cat.id !== activeCategory),
    //   ]
    // : categories;

  return (
    <div className="flex flex-col mt-[75px] max-sm:mt-[60] w-full h-auto bg-white">
      <div className="w-full h-[16vw] ">
        <img
          src="/img/RZ.jpeg"
          alt="Example"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-1 flex-wrap justify-between gap-3  items-center p-3">
        <h1
          className="text-2xl font-semibold cursor-pointer text-blue"
          onClick={()=>{
            navigate("/products");
            setError(null);
            fetchAllProducts()}}
        >
          Tous nos produits
        </h1>
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
                className="absolute right-3 bg-white border border-gray-300 rounded-lg mt-2 w-auto min-w-[250px] max-w-[250px] shadow-md z-10"
              >
                <ul className="flex flex-col h-[50vh] overflow-y-auto">
                  {sortedCategories.map((category) => (
                    <li
                      key={category.id}
                      className={`flex justify-between items-center px-3 py-3 text-start hover:bg-lightblue border-b-[1px] hover:cursor-pointer hover:rounded-lg ${
                        category.id === activeCategory ? "bg-lightblue " : ""
                      }`}
                      onClick={() =>{
                        handleCategoryClick(category)}}
                    >
                      {isEditingCategory === category.id ? (
                      <input
                        type="text"
                        value={editedCategoryName}
                        onChange={(e) => setEditedCategoryName(e.target.value)}
                        className="w-full p-2 outline-none rounded-lg ml-1 border"
                      />
                    ) : (
                      <span className="w-[70%] break-words">
                        {category.nom_categorie}
                      </span>
                    )}

                    {user &&
                      (isEditingCategory === category.id ? (
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="sm"
                          className="text-green-500 cursor-pointer m-2 hover:bg-green-100 rounded-lg p-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategorySave(category.id);
                          }}
                        />
                      ) : (
                        <div className="flex gap-1 px-1">
                          <FontAwesomeIcon
                            icon={faPen}
                            size="sm"
                            className="text-gray cursor-pointer hover:bg-slate-100 rounded-lg p-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCategoryEdit(category);
                            }}
                          />
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            size="sm"
                            className="text-red-500 cursor-pointer hover:bg-red-100 rounded-lg p-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              openDeleteModal(category.id);
                            }}
                          />
                        </div>
                      ))}
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
        <div className="flex flex-col p-3 pt-0 w-[25vw] h-[86vh] max-lg:hidden sticky top-[75px]">
          <div className="w-full h-auto border-[1px] border-grey-300 rounded-lg">
            <div className="w-full h-12 bg-blue rounded-t-md">
              <h1 className="flex justify-center py-2 text-xl font-semibold text-white">
                Catégories
              </h1>
            </div>
            <div>
              <ul className="w-full text-center h-[80vh] overflow-auto">
                {sortedCategories.map((category) => (
                  <li
                    key={category.id}
                    className={`flex w-full break-words whitespace-normal h-auto py-3 px-2 border-b-[1px] cursor-pointer hover:bg-lightblue ${
                      category.id === activeCategory ? "bg-lightblue" : ""
                    } ${user ? "justify-between" : "justify-center"} items-center`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {isEditingCategory === category.id ? (
                      <input
                        type="text"
                        value={editedCategoryName}
                        onChange={(e) => setEditedCategoryName(e.target.value)}
                        className="w-full p-2 outline-none rounded-lg ml-1 border"
                      />
                    ) : (
                      <span className="w-[78%] break-words">
                        {category.nom_categorie}
                      </span>
                    )}

                    {user &&
                      (isEditingCategory === category.id ? (
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="sm"
                          className="text-green-500 cursor-pointer m-2 hover:bg-green-100 rounded-lg p-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategorySave(category.id);
                          }}
                        />
                      ) : (
                        <div className="flex gap-1 px-1">
                          <FontAwesomeIcon
                            icon={faPen}
                            size="sm"
                            className="text-gray cursor-pointer hover:bg-slate-100 rounded-lg p-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCategoryEdit(category);
                            }}
                          />
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            size="sm"
                            className="text-red-500 cursor-pointer hover:bg-red-100 rounded-lg p-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              openDeleteModal(category.id);
                            }}
                          />
                        </div>
                      ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      {isDeleteModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
      <h2 className="text-lg font-semibold mb-4">Confirmer la suppression</h2>
      <p>Voulez-vous vraiment supprimer cette catégorie ainsi que tous les produits associés ?<br /> Cette action est définitive et ne peut pas être annulée.</p>
      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => setIsDeleteModalOpen(false)}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg"
        >
          Annuler
        </button>
        <button
          onClick={handleDeleteConfirmation}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Supprimer
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default ProductsPage;
