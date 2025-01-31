import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import { productAtom } from '../atoms/productsAtom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ShowProduit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const user = useRecoilValue(userAtom);
  const setProducts = useSetRecoilState(productAtom);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/produit/${id}`);
        if (!response.ok) throw new Error('Erreur lors de la récupération du produit');
        const data = await response.json();
        setProduct(data.produit);

        const categoryResponse = await fetch(`/api/categorie/${data.produit.categorie_id}`);
        if (!categoryResponse.ok) throw new Error('Erreur lors de la récupération de la catégorie');
        const categoryData = await categoryResponse.json();
        
        setCategoryName(categoryData.categorie.nom_categorie);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmDelete = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("admin-user"));
      const response = await fetch(`/api/admin/produit/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error('Erreur lors de la suppression du produit');

      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== parseInt(id)));
      navigate('/products');
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      closeModal();
    }
  };

  const handleEdit = () => navigate(`/admin/edit-product/${product.id}`);

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-gray-600">Produit introuvable.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <img 
          src={`${import.meta.env.VITE_APP_API_URL}storage/${product.image_produit}`} 
          alt={product.nom_produit} 
          className="w-full h-[350px] object-contain border rounded-lg"
        />

        {/* Infos du produit */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-808">{product.nom_produit}</h1>
            <p className="text-gray italic mt-[-5px] text-sm">{categoryName}</p>
            <p className="text-xl font-semibold text-blue my-3">{product.prix} Ar</p>
            <hr />

            <h2 className="text-lg font-semibold text-gray-700 mt-3">Description :</h2>
            <p className="text-gray-600">{product.description_produit}</p>
          </div>

          {/* Boutons Admin */}
          {user && (
            <div className="flex mt-6 space-x-3">
              <button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                onClick={openModal}
              >
                Supprimer
              </button>
              <button 
                className="bg-blue hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                onClick={handleEdit}
              >
                Modifier
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de confirmation */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de suppression"
        className="p-6 bg-white rounded-lg shadow-lg w-96 mx-auto mt-30"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirmation de suppression</h2>
        <p className="text-gray-600 mb-6">Êtes-vous sûr de vouloir supprimer ce produit ?</p>
        <div className="flex justify-end space-x-3">
          <button 
            onClick={confirmDelete} 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            Oui
          </button>
          <button 
            onClick={closeModal} 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition"
          >
            Non
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ShowProduit;
