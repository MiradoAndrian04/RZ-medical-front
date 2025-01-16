import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">RZ Medical</h2>
          <p className="text-gray-400">
          Nous fournissons les meilleurs services à nos clients.Votre satisfaction est notre priorité.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-purple-600">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="text-green-500">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="#" className="text-blue-500">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Lien rapides</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                A propos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Contactez nous
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contactez nous</h2>
          <ul className="space-y-2">
            <li>
              <p className="text-gray-400">Phone:++261 34 123 4567</p>
            </li>
            <li>
              <p className="text-gray-400">Email: RZmedical@gmail.com</p>
            </li>
            <li>
              <p className="text-gray-400">Address: 123 Ankadifotsy, Antananarivo, Madagascar</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} RZ Medical. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;