function ContactPage() {
  return (
    <div className="min-h-screen bg-gray50 flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">

          {/* Contact Info Section */}
          <div className="flex flex-col items-center w-full md:w-3/5 bg-gray100 p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-gray600 flex items-center"> Contactez-nous</h1>

            {/* Contact Details */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray600">Ligne d'assistance</h3>
              <p className="text-lg text-gray mt-4 leading-relaxed">
                <i className="fas fa-phone-alt text-green-600"></i> +261 34 123 4567<br />
                <i className="fas fa-envelope text-gray"></i> contact@rzmedical.com
              </p>
            </div>

            {/* Address Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray600">Adresse</h3>
              <p className="text-lg text-gray mt-4 leading-relaxed">
              <i className="fas fa-map-marker-alt text-red-600"></i> Anosizato, Antananarivo
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-3/5">
            <iframe
              className="w-full h-[600px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1874!2d47.5078543!3d-18.9368081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAnosizato!5e0!3m2!1sfr!2smg!4v1700982401000&t=k" 

              allowFullScreen=""
              loading="active"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
