import { useState } from 'react';
import { Combobox } from '@headlessui/react';

const ProductCategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ordinateurs');
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([
    'Ordinateurs', 'Smartphones', 'Tablettes', 'Télévisions', 'Appareils photo', 'Casques audio', 'Montres connectées', 'Imprimantes',
    'Claviers', 'Souris', 'Composants PC', 'Disques durs externes', 'Cartes graphiques', 'Alimentations', 'Écrans', 'Projecteurs',
    'Accessoires de bureau', 'Enceintes', 'Drones', 'Consoles de jeux', 'Jeux vidéo', 'Câbles et adaptateurs', 'Routeurs', 'Logiciels'
  ]);

  // Fonction pour normaliser le texte (ignorer les accents et majuscules)
  const normalizeText = (text) => {
    return text
      .normalize('NFD') // Normalise les caractères accentués
      .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
      .toLowerCase(); // Convertit en minuscule
  };

  const filteredCategories =
    query === ''
      ? categories
      : categories.filter((category) =>
          normalizeText(category).includes(normalizeText(query))
        );

  const handleAddCategory = () => {
    if (query && !categories.some((category) => normalizeText(category) === normalizeText(query))) {
      setCategories([...categories, query]);
      setSelectedCategory(query); // Set the newly added category as selected
    }
  };

  return (
    <div className="w-full  mx-auto mt-10">
      <Combobox value={selectedCategory} onChange={setSelectedCategory}>
        <div className="relative">
          <Combobox.Input
            className="w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Catégorie de produit..."
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
                  value={category}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${active ? 'bg-blue-500 text-black' : 'text-gray-900'}`
                  }
                >
                  {category}
                </Combobox.Option>
              ))
            )}
            {query && !categories.some((category) => normalizeText(category) === normalizeText(query)) && (
              <div
                className="relative cursor-pointer select-none py-2 px-4 text-blue-500"
                onClick={handleAddCategory}
              >
                Ajouter la catégorie "{query}"
              </div>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default ProductCategorySelector;
