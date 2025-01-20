import { useState } from 'react';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    unit: '',
    images: [],
    imagePreviews: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    // Générer les aperçus d'images
    const previews = files.map((file) => URL.createObjectURL(file));

    setProduct({ ...product, images: files, imagePreviews: previews });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Produit ajouté :', product);

    // Nettoyage des aperçus (optionnel)
    product.imagePreviews.forEach((url) => URL.revokeObjectURL(url));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Ajouter un Produit</h1>

        {/* Téléchargement d'images */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="images">
            Images du produit
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageUpload}
            multiple
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept="image/*"
          />
          {product.imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {product.imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Prévisualisation ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          )}
        </div>

        {/* Nom du produit */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Nom du produit
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez le nom du produit"
            required
          />
        </div>

        {/* Prix */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
            Prix
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez le prix"
            required
          />
        </div>

        {/* Unité unitaire */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="unit">
            Unité
          </label>
          <select
            id="unit"
            name="unit"
            value={product.unit}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Choisissez une unité</option>
            <option value="piece">FMG</option>
            <option value="kg">ARIARY</option>
          </select>
        </div>

        {/* Catégorie */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Catégorie
          </label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Choisissez une catégorie</option>
            <option value="electronics">Électronique</option>
            <option value="clothing">Vêtements</option>
            <option value="furniture">Meubles</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez la description"
            rows="4"
          ></textarea>
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
          >
            Ajouter le produit
          </button>
          <button
            type="button"
            onClick={() => console.log('Confirmation action')}
            className="bg-green-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 w-full sm:w-auto"
          >
            Confirmer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
