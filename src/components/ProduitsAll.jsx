import { useState } from "react";
import ProduitCard from "./ProduitCard";
import { useRecoilValue, useRecoilState } from "recoil";
import { productAtom } from "../atoms/productsAtom";
import { useNavigate } from "react-router-dom";
import { errorAtom } from "../atoms/errorAtom";

const ProduitsAll = () => {
  const products = useRecoilValue(productAtom);
  const [error, setError] = useRecoilState(errorAtom);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Nombre d'éléments par page

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Déterminer les produits à afficher pour la page actuelle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Fonction pour tronquer la description
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculer les pages à afficher
  const getPaginationGroup = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);
    if (end - start < 4) {
      if (start === 1) {
        end = Math.min(totalPages, start + 4);
      } else if (end === totalPages) {
        start = Math.max(1, end - 4);
      }
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return (
    <>
      <div className="flex flex-col w-full min-h-[350px] gap-1 p-2 pt-0 bg-[#f0f0f0] rounded-lg">
        {error ? (
          <div className="text-red-500 p-6">{error}</div>
        ) : (
          <>
            <div className="flex flex-row flex-wrap gap-2 mt-3">
              {currentProducts.map((product) => (
                console.log(product),
                <div
                  key={product.id}
                  className="w-[24.1%] max-md:w-[32.4%] max-sm:w-[48.5%] cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <ProduitCard
                    src={`${import.meta.env.VITE_APP_API_URL}storage/${product.image_produit}`}
                    titre={product.nom_produit}
                    categorie={product.categorie ? truncateDescription(product.categorie.nom_categorie,15): ""} // Assurez-vous que 'categorie_nom' est bien le nom de la catégorie
                    description={truncateDescription(product.description_produit, 18)} // Description tronquée
                  />
                </div>
              ))}
            </div>
            <nav aria-label="Page navigation example" className="flex justify-center mt-4">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <button
                    onClick={handlePreviousPage}
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-blue bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray hover:text-white"
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {getPaginationGroup().map((pageNumber) => (
                  <li key={pageNumber}>
                    <button
                      onClick={() => handlePageClick(pageNumber)}
                      className={`flex items-center justify-center px-3 h-8 leading-tight ${
                        currentPage === pageNumber
                          ? "text-blue border border-gray-300 bg-blue-50 hover:bg-gray hover:text-white "
                          : "text-gray bg-white border border-gray-300 hover:bg-gray hover:text-white "
                      }`}
                    >
                      {pageNumber}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleNextPage}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-blue hover:bg-gray hover:text-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default ProduitsAll;
