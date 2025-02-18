import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const handleScroll = (id) => {
    if (location.pathname === "/") {
      // Si on est déjà sur la page d'accueil, scroll directement
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si on n'est pas sur la page d'accueil, redirige et scroll après
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Délai pour attendre que la page soit rendue
    }
  };
  return (
    <footer className="bg-darkgray text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">RZ Medical Equipment</h2>
          <p className="text-gray-400">
          Nous fournissons les meilleurs services à nos clients. <br /> Votre satisfaction est notre priorité.
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
            <a href="#" className="text-blue">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Lien rapides</h2>
          <Link
                  to="/products"
                  className="hover:text-blue block py-2 mb-1"
                >
                  Produits
                </Link>
          <ul className="space-y-2">
                  <li
                    onClick={() => handleScroll("services")}
                    className="cursor-pointer hover:text-blue"
                  >
                    Services
                  </li>
                  <li
                    onClick={() => handleScroll("about")}
                    className="cursor-pointer hover:text-blue"
                  >
                    Apropos
                  </li>
                  <li
                    onClick={() => handleScroll("avantage")}
                    className="cursor-pointer hover:text-blue"
                  >
                    Avantages
                  </li>
                </ul>
                <Link to="/contact" className='mt-2 hover:text-blue block'>Contacter-nous</Link>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contactez nous</h2>
          <ul className="space-y-2">
            <li>
              <p className="text-lightgray">Phone:+261 34 12 453 67</p>
            </li>
            <li>
              <p className="text-lightgray">Email: RZmedical@gmail.com</p>
            </li>
            <li>
              <p className="text-lightgray">Address: LOt VU 295 Manakambahiny Antananarivo 101</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-lightgray text-sm">
          &copy; {new Date().getFullYear()} RZ Medical. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;