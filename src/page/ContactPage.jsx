import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function ContactPage() {
  const [contactInfo, setContactInfo] = useState({ email: '', phone: [] });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des informations de contact');
        }
        const data = await response.json();
        console.log("data", data);
        
        if (data && data.success && data.users && data.users.length > 0) {
          // Récupérer les informations de contact depuis la première entrée du tableau users
          const user = data.users[0];
          setContactInfo({
            email: user.email,
            phone: user.telephones
          });
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gray50 flex items-center justify-center px-4 py-5">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">

          {/* Contact Info Section */}
          <div className="flex flex-col w-full md:w-3/5 bg-gray100 p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-gray600 flex items-center"> Contactez-nous</h1>

            {/* Contact Details */}
            <div className="mt-8 ml-2">
              <h3 className="text-2xl font-semibold text-gray600">Ligne d'assistance</h3>
              <p className="text-lg text-gray mt-4 leading-relaxed">
                {contactInfo.phone && contactInfo.phone.map((phone, index) => (
                  <span key={index} className="block mb-3">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-green-600" /> +261 {phone}<br />
                  </span>
                ))}
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" /> {contactInfo.email}
              </p>
            </div>

            {/* Address Section */}
            <div className="mt-8 ml-2">
              <h3 className="text-2xl font-semibold text-gray600">Adresse</h3>
              <p className="text-lg text-gray mt-4 leading-relaxed">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600" /> Ankadifotsy, Antananarivo
              </p>
            </div>

            {/* Customer Service */}
            {/* <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray600">Service après-vente</h3>
              <p className="text-lg text-gray mt-4 leading-relaxed">
                <i className="fas fa-phone-alt text-green-600"></i> +261 34 567 8901<br />
                <i className="fas fa-envelope text-gray"></i> sav@rzmedical.com
              </p>
            </div> */}
          </div>

          {/* Map Section */}
          <div className="w-full md:w-3/5">
          <iframe
              className="w-full h-[600px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.856743292647!2d47.50790531535268!3d-18.8791909872201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d4d1a32cbcd%3A0x9e54d7e7e8cba4c2!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sen!2sus!4v1616679124976!5m2!1sen!2sus&markers=color:red%7Clabel:C%7C-18.8791909872201,47.50790531535268"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
