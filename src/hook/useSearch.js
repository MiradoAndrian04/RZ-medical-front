import { useRecoilState } from 'recoil';
import { fetchAllCategories } from './categoryService';
import { searchAtom } from '../atoms/searchAtom';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchAtom);
  
  const handleSearch = async (term) => {
    // Convertir le terme de recherche en minuscules
    const lowerCaseTerm = term.toLowerCase();
    
    // Mettre à jour l'atom avec le terme de recherche
    setSearchTerm(lowerCaseTerm);

    try {
      // Récupérer les catégories si nécessaire
      const categories = await fetchAllCategories();

      // Filtrez les produits ici si nécessair

      return term;
    } catch (error) {
      console.error('Erreur lors du chargement des catégories:', error);
      // Retourner le terme original sans modification
      return term;
    }
  };

  return { searchTerm, handleSearch };
};

export default useSearch;
