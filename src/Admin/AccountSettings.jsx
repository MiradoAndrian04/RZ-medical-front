import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountSettings = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    nom_utilisateur: '',
    prenom_utilisateur: '',
    email: '',
    telephones: [''],
    mot_de_passe: '',
    confirmPassword: '',
  });


  const [showValidationField, setShowValidationField] = useState(false);
  const [validationCode, setValidationCode] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("admin-user"));
        const response = await fetch('/api/admin/utilisateur', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des informations utilisateur');
        }
        const data = await response.json();

        
        setUser(data.users[0]);
        setFormData({
          nom_utilisateur: data.users[0].nom_utilisateur,
          prenom_utilisateur: data.users[0].prenom_utilisateur,
          email: data.users[0].email,
          telephones: data.users[0].telephones || [''],
          mot_de_passe: '',
          confirmPassword: '',
        });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (index, value) => {
    const newPhones = [...formData.telephones];
    newPhones[index] = value;
    setFormData((prev) => ({
      ...prev,
      telephones: newPhones,
    }));
  };

  const addPhoneField = () => {
    setFormData((prev) => ({
      ...prev,
      telephones: [...prev.telephones, ''],
    }));
  };

  const removePhoneField = (index) => {
    if (formData.telephones.length > 1) {
      const newPhones = formData.telephones.filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        telephones: newPhones,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidPhoneNumbers = formData.telephones.every(phone => phone.length === 10);
  
    if (!isValidPhoneNumbers) {
      toast.error("Chaque numéro de téléphone doit contenir exactement 10 chiffres.");
      return;
    }

    setUserEmail(formData.email);
    
    if (formData.mot_de_passe && formData.mot_de_passe !== formData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const token = JSON.parse(localStorage.getItem("admin-user"));
      const formDataToSend = new FormData();
      formDataToSend.append('nom_utilisateur', formData.nom_utilisateur);
      formDataToSend.append('prenom_utilisateur', formData.prenom_utilisateur);
      formDataToSend.append('email', formData.email);
      formData.telephones.forEach((phone, index) => {
        formDataToSend.append(`telephones[${index}]`, phone);
      });
      formDataToSend.append('mot_de_passe', formData.mot_de_passe);
      formDataToSend.append('_method', 'PUT');

      const response = await fetch(`/api/admin/update/${user.id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        if (result.message.includes('Un email de validation a été envoyé')) {
          toast.success(result.message);
          setShowValidationField(true)
        } else {
          toast.success('Les informations utilisateur ont été mises à jour avec succès');
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la mise à jour des informations utilisateur');
    }
  };
  const handleValidationSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("admin-user"));
      const response = await fetch('/api/validation', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, validation_code: validationCode }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success('Votre compte a été mis à jour avec succès.');
        setShowValidationField(false);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Erreur de validation:', error);
      toast.error('Erreur lors de la validation du code.');
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md text-gray">
        <h2 className="text-3xl font-bold text-center text-gray-800">Paramètres du compte</h2>
        {!showValidationField?(
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom_utilisateur" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="nom_utilisateur"
                name="nom_utilisateur"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.nom_utilisateur}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="prenom_utilisateur" className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="prenom_utilisateur"
                name="prenom_utilisateur"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.prenom_utilisateur}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse Email
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="telephones" className="block text-sm font-medium text-gray-700">
              Numéro de Téléphone
            </label>
            {formData.telephones.map((phone, index) => (
              <div className="relative mt-1 flex items-center" key={index}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                </span>
                <input
                  type="tel"
                  id={`telephones-${index}`}
                  name={`telephones-${index}`}
                  className="w-full px-3 py-2 pl-10 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={phone}
                  onChange={(e) => handlePhoneChange(index, e.target.value)}
                  required
                />
                {formData.telephones.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePhoneField(index)}
                    className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addPhoneField}
              className="flex items-center px-3 py-2 mt-2 text-sm font-medium text-blue border border-blue rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Ajouter un autre téléphone
            </button>
          </div>
          <div>
            <label htmlFor="mot_de_passe" className="block text-sm font-medium text-gray-700">
              Mot de Passe
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
              </span>
              <input
                type="password"
                id="mot_de_passe"
                name="mot_de_passe"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.mot_de_passe}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmer le Mot de Passe
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
              </span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue rounded-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Enregistrer les Modifications
            </button>
          </div>
        </form>
        ):(
          <form className="space-y-6" onSubmit={handleValidationSubmit}>
          <div>
            <label htmlFor="validationCode" className="block text-sm font-medium text-gray-700">
              Code de Validation
            </label>
            <input
              type="text"
              id="validationCode"
              name="validationCode"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              value={validationCode}
              onChange={(e) => setValidationCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-green-600 rounded-md">
            Valider le Code
          </button>
        </form>
      )}
        <ToastContainer position="bottom-right" pauseOnHover />
      </div>
    </div>
  );
};

export default AccountSettings;