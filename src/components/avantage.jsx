const Advantages = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg text-blue-600 font-bold uppercase">Notre Avantage</h2>
        <h1 className="text-3xl font-extrabold text-gray-800 my-4">
          Pourquoi choisir RZ Medical ?
        </h1>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type.
          <br />
          It has survived not only five centuries, but also the leap into electronic
          typesetting with the release of Lorem Ipsum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <img src="public/img/service.png" alt="Service" className="w-120 h-48 object-cover mb-4 rounded-lg ml-4 transform translate-x-11" />
          <h3 className="text-xl font-bold mb-2">Service</h3>
          <p> 
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>

        
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md border">
          <img src="public/img/pat.png" alt="Partenaire" className="w-120 h-48 object-cover mb-4 rounded-lg ml-4 transform translate-x-11" />
          <h3 className="text-xl font-bold mb-2">Partenaire</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>

        
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <img src="public/img/equipe.png" alt="Équipe" className="w-120 h-48 object-cover mb-4 rounded-lg ml-4 transform translate-x-3" />
          <h3 className="text-xl font-bold mb-2">Équipe</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
