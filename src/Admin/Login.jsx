import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter la soumission du formulaire
    console.log('Email:', email, 'Password:', password); 
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray700 mb-8">Connexion</h2>
        
        <form onSubmit={handleSubmit}>
            
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray600">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full px-5 py-3 border border-gray300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue500 focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium text-gray600">Mot de passe</label>
            <input 
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-5 py-3 border border-gray300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue hover:bg-lightblue text-white font-semibold py-3 rounded-md focus:outline-none">
            Se connecter
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <a href="#" className="text-sm text-blue-500 hover:underline">Mot de passe oublié ?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
