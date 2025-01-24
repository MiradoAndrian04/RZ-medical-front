// import { TbVideoPlus } from "react-icons/tb";
// import Button from "../components/Button";

import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCategorySelector from "./ProductCategorySelector";
import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: null,
    previewImage: null,
  });
  // const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Récupère le premier fichier sélectionné
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          image: file, // Stocke le fichier
          previewImage: reader.result, // Stocke l'URL de prévisualisation
        }));
      };
      reader.readAsDataURL(file); // Convertit le fichier en URL
    }
  };

  const handleCategoryChange = (category) => {
    setFormData({
      ...formData,
      category: category, // Met à jour la catégorie
    });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'image' && formData[key]) {
        formDataToSend.append(key, formData[key]); // Ajoute le fichier
      } else {
        formDataToSend.append(key, formData[key]); // Ajoute les autres champs
      }
    });
  console.log(formDataToSend);
  
    try {
      const response = await fetch('/api/post/products/create', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert('Produit ajouté avec succès');
        setFormData({
          name: '',
          price: '',
          category: '',
          description: '',
          image: null,
          previewImage: null,
        });
      } else {
        alert('Erreur lors de l’ajout du produit');
      }

    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de connexion au serveur');
    }
  };
  
  
  return (
    <div className="w-[100%] h-auto flex items-center my-5">
      <form className="w-[800px] border-[1px] items-center border-grey rounded-lg mx-auto flex flex-col p-5 gap-3 shadow-md"
        onSubmit={handleSubmit}>
        <h1 className="font-semibold text-xl text-blue">Ajouter un produit</h1>
        <div className="flex flex-wrap max-md:flex-col w-full justify-between mt-5">
          <div className="w-[45%] mx-auto ">
            <label
              htmlFor="image"
              className="w-full max-md:mx-auto cursor-pointer bg-white hover:bg-gray-200 border-dashed border-[1px] border-gray rounded-md h-[250px] aspect-square flex flex-col justify-center items-center"
            >
              {formData.previewImage ? (
                <img
                  src={formData.previewImage}
                  alt="Preview"
                  className="w-full h-full object-contain rounded-md"
                />
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faFileImage}
                    size="3x"
                    className="font-light text-blue"
                  />
                  <p className="text-blue">Ajouter une image</p>
                </>
              )}
            </label>
            {/* Champ input caché pour le fichier */}
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              
              className="hidden"
            />
          </div>
          <div className="w-[50%] max-md:w-full max-md:mt-5">
            <div className="w-[100%]">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nom du produit
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" border border-grey text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Titre"
                onChange={handleInputChange}
                value={formData.name}
                required
              />
            </div>
            <div className="w-[100%] mt-3">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Prix
              </label>
              <div className="mt-2">
                <div className="flex items-center border border-grey rounded-md bg-white pl-3  -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-lightblue">
                  <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Prix en Ariary"
                    onChange={handleInputChange}
                    value={formData.price}
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative px-3 border-l border-grey">
                    Ariary
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-3">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Categorie
              </label>
              <ProductCategorySelector 
              onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-grey focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Description du cours..."
            onChange={handleInputChange}
            value={formData.description}
          ></textarea>
        </div>
        <div className="w-full">
          <button
          type="submit"
            className={
              "bg-blue hover:bg-cyan-800 p-3 px-[60px] text-white mt-0 rounded-lg w-full"
            }
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
