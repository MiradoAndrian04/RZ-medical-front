function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">

          {/* Contact Info Section */}
          <div className="w-full md:w-3/5 bg-gray-100 p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-gray-800 flex items-center"> Contactez-nous</h1>

            {/* Contact Details */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">Ligne d'assistance</h3>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                <i className="fas fa-phone-alt text-green-600"></i> +261 34 123 4567<br />
                <i className="fas fa-envelope text-gray-600"></i> contact@rzmedical.com
              </p>
            </div>

            {/* Address Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">Adresse</h3>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                <i className="fas fa-map-marker-alt text-red-600"></i> Ankadifotsy, Antananarivo
              </p>
            </div>

            {/* Customer Service */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">Service après-vente</h3>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                <i className="fas fa-phone-alt text-green-600"></i> +261 34 567 8901<br />
                <i className="fas fa-envelope text-gray-600"></i> sav@rzmedical.com
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-3/5">
            <iframe
              className="w-full h-[600px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156905.2140272075!2d43.602645479205226!3d-18.7669475561219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d4d1a32cbcd%3A0x9e54d7e7e8cba4c2!2sMadagascar!5e0!3m2!1sen!2sus!4v1616679124976!5m2!1sen!2sus
"
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
