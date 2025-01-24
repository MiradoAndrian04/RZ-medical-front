import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const AccountSettings = () => {
  const user = useRecoilValue(userAtom);
  const [formData, setFormData] = useState({
    email: '',
    phone: [''],
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email,
        phone: user.phone ? user.phone.map(String) : [''],
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (index, value) => {
    const newPhones = [...formData.phone];
    newPhones[index] = value;
    setFormData((prev) => ({
      ...prev,
      phone: newPhones,
    }));
  };

  const addPhoneField = () => {
    setFormData((prev) => ({
      ...prev,
      phone: [...prev.phone, ''],
    }));
  };

  const removePhoneField = (index) => {
    if (formData.phone.length > 1) {
      const newPhones = formData.phone.filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        phone: newPhones,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await fetch(`/api/user/admin/${user._id}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour des informations utilisateur');
      }

      const data = await response.json();
      console.log('Mise à jour réussie:', data);
      alert('Mise à jour réussie');
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la mise à jour des informations utilisateur');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md text-gray">
        <h2 className="text-3xl font-bold text-center text-gray-800">Paramètres du compte</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Numéro de Téléphone
            </label>
            {formData.phone.map((phone, index) => (
              <div className="relative mt-1 flex items-center" key={index}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                </span>
                <input
                  type="tel"
                  id={`phone-${index}`}
                  name={`phone-${index}`}
                  className="w-full px-3 py-2 pl-10 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={phone}
                  onChange={(e) => handlePhoneChange(index, e.target.value)}
                  required
                />
                {formData.phone.length > 1 && (
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
              className="flex items-center px-3 py-2 mt-2 text-sm font-medium text-blue border border-b;ue rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Ajouter un autre téléphone
            </button>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de Passe
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
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
      </div>
    </div>
  );
};

export default AccountSettings;