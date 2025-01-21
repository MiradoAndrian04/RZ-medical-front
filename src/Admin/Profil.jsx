import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ImageSelector = ({ onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Ouvre la fenêtre de sélection de fichier
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Récupère le fichier sélectionné
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleButtonClick}
        className="w-full bg-gray-700 text-gray border-[1px] hover:bg-gray-300 hover:text-black border-gray py-2 rounded mb-6 hover:bg-gray-600"
      >
        Changer la photo
      </button>
      {/* Input caché pour sélectionner un fichier */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  );
};
ImageSelector.propTypes = {
  onImageChange: PropTypes.func.isRequired,
};

const UserProfileEdit = () => {
  const [selectedImage, setSelectedImage] = useState('/img/auto.png');

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-white text-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl text-gray font-bold text-center mb-6">Profil</h2>
        
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <img
              src={selectedImage}
              alt="User Icon"
              className="w-24 h-24 rounded-full border-4 border-gray-700"
            />
          </div>
        </div>
        
        <ImageSelector onImageChange={handleImageChange} />

        {/* Form Section */}
        <form>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-1" htmlFor="username">
              Nom d&apos;utilisateur <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Nom d'utilisateur"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-black font-semibold mb-1" htmlFor="email">
              Adresse mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="exemple@gmail.com"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-black font-semibold mb-1" htmlFor="password">
              Mot de passe <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-[45%]"
            >
              Retour
            </button>
            <button
              type="submit"
              className="bg-blue500 hover:bg-blue-600 text-white py-2 px-4 rounded w-[50%]"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileEdit;