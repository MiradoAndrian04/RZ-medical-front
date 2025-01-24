import { useEffect, useState } from 'react';
import { Combobox } from '@headlessui/react';

// eslint-disable-next-line react/prop-types
const ProductCategorySelector = ({ selectedCategory, onCategoryChange }) => {
  const [selected, setSelected] = useState(selectedCategory || '');
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);

  // Fonction pour normaliser le texte (ignorer les accents et majuscules)
  const normalizeText = (text) => {
    if (!text) return ''
    return text
      .normalize('NFD') // Normalise les caractères accentués
      .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
      .toLowerCase(); // Convertit en minuscule
  };

  const filteredCategories =
    query === ''
      ? categories
      : categories.filter((category) =>
          normalizeText(category.name).includes(normalizeText(query))
        );

  const handleAddCategory = () => {
    if (query && !categories.some((category) => normalizeText(category.name) === normalizeText(query))) {
      const newCategory = { name: query };
      setCategories([...categories, newCategory]);
      setSelected(query); // Set the newly added category as selected
      onCategoryChange(newCategory);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/post/categories');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des catégories');
        }
        const data = await response.json();
        setCategories(data); // Assurez-vous que la structure des données correspond à `data.categories`
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    setSelected(selectedCategory || '');
  }, [selectedCategory]);

  return (
    <div className="w-full mx-auto">
      <Combobox value={selected} onChange={(value) => { 
        setSelected(value);
        setQuery(value);
        onCategoryChange(value); // Notifie le parent dès que la catégorie est sélectionnée
      }}>
        <div className="relative">
          <Combobox.Input
            id="category"
            className="w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Veuillez sélectionner votre catégorie"
            value={query ||selected || ""}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Combobox.Button>
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCategories.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Aucun résultat trouvé
              </div>
            ) : (
              filteredCategories.map((category, index) => (
                <Combobox.Option
                  key={index}
                  value={category.name}
                  className={({ active }) =>
                    `relative hover:bg-lightblue cursor-pointer select-none py-2 px-4 ${active ? 'bg-blue-500 text-black' : 'text-gray-900'}`
                  }
                >
                  {category.name}
                </Combobox.Option>
              ))
            )}
            {query && !categories.some((category) => normalizeText(category.name) === normalizeText(query)) && (
              <div
                className="relative cursor-pointer select-none py-2 px-4 text-blue-500"
                onClick={handleAddCategory}
              >
                Ajouter la catégorie &quot;{query}&quot;
              </div>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default ProductCategorySelector;