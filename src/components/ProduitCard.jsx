const ProduitCard = ({ src, reference, titre, categorie, description }) => {
  return (
    <div className=" h-full shadow-md rounded-lg p-4 bg-[#e6e3e3] hover:bg-[#d4d2d2] mx-1">
      <img
        src={src}
        alt={titre}

        onError={(e) => {
          e.target.src = "/img/Image-not-found.png";
        }}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <hr className="my-2 h-px bg-gray border-0 dark:bg-gray-700" />
      <h2 className="mt-2 text-md font-semibold text-blue">{reference}</h2>
      <h2 className="mt-3 text-sm font-semibold">{titre}</h2>
      <p className="text-sm text-gray">{categorie}</p> {/* Catégorie */}
      <p className="text-sm text-gray-700 mt-2">{description}</p>{" "}
      {/* Description tronquée */}
    </div>
  );
};

export default ProduitCard;
