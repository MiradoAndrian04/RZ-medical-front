import React from 'react'

function ContactPage() {
  return (
<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">

          {/* Contact Info Section */}

          <div className="w-full md:w-1/2 bg-gray-100 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-800">Contactez nous</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" className="text-red-600">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
              <a href="#" className="text-black">
                <i className="fab fa-x-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-purple-600">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Ligne d'assistance & Email</h3>
              <p className="text-gray-600 mt-2">
                <i className="fas fa-phone text-purple-600"></i> +86-531-68629309<br />
                <i className="fas fa-phone text-purple-600"></i> +86-531-81307671<br />
                <i className="fas fa-envelope text-purple-600"></i> export@rzmedical.cc
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Addresse</h3>
              <p className="text-gray-600 mt-2">
                <i className="fas fa-map-marker-alt text-purple-600"></i> Ankadifotsy
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Customer Complaints</h3>
              <p className="text-gray-600 mt-2">
                <i className="fas fa-phone text-purple-600"></i> +86-531-81307671<br />
                <i className="fas fa-phone text-purple-600"></i> +86-531-81219803<br />
                <i className="fas fa-envelope text-purple-600"></i> customer_support@biobase.cc
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Service après-vente</h3>
              <p className="text-gray-600 mt-2">
                <i className="fas fa-phone text-purple-600"></i> +86-531-66777720<br />
                <i className="fas fa-phone text-purple-600"></i> +86-531-81219803<br />
                <i className="fas fa-envelope text-purple-600"></i> service_sd@biobase.cc
              </p>
            </div>
          </div>

          {/* Map Section */}

          <div className="w-full md:w-1/2">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.4212130670073!2d117.05148881531704!3d36.6734249799687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35c711e5ac5db8e3%3A0xfb4b4972e98e5c4f!2sHigh-tech%20Zone%2C%20Jinan%2C%20Shandong%2C%20China!5e0!3m2!1sen!2sus!4v1616661772456!5m2!1sen!2sus"
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


export default ContactPage