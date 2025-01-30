import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import { productAtom } from '../atoms/productsAtom';
import { toast, ToastContainer } from 'react-toastify';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

const ShowProduit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const user = useRecoilValue(userAtom);
  const setProducts = useSetRecoilState(productAtom);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/produit/${id}`, {method: "GET"});
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du produit');
        }
        const data = await response.json();
        
        setProduct(data.produit);
        

        // Récupérer le nom de la catégorie
        const categoryResponse = await fetch(`/api/categorie/${data.produit.categorie_id}`);
        if (!categoryResponse.ok) {
          throw new Error('Erreur lors de la récupération de la catégorie');
        }
        const categoryData = await categoryResponse.json();
        
        setCategoryName(categoryData.categorie.nom_categorie);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du produit');
      }

      // Mettre à jour la liste des produits dans Recoil
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== parseInt(id)));

      toast.success('Produit supprimé avec succès');
      navigate('/products'); // Rediriger vers la liste des produits après suppression
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la suppression du produit');
    } finally {
      closeModal();
    }
  };

  const handleEdit = () => {
    navigate(`/admin/edit-product/${product.id}`);
  };

  if (!product) {
    return <div className='w-full h-[400px] flex items-center justify-center'>Chargement...</div>;
  }

  return (
    <div className="flex w-full gap-1 p-3 pt-0 flex-row flex-wrap bg-[#f0f0f0] rounded-lg relative">
      <div className="flex flex-row mt-3">
        <div className="flex flex-row gap-5 max-md:flex-col h-auto mx-auto">
          <img src={`${import.meta.env.VITE_APP_API_URL}storage/${product.image_produit}`} alt={product.nom_produit} className="w-[300px] h-[300px] max-md:w-full max-md:h-[35vw] rounded-lg object-contain border"/>
          <div className="flex flex-col flex-1 h-auto mt-3 p-3">
            <h1 className="text-3xl text-grey-100 font-semibold">{product.nom_produit}</h1>
            <span className='text-gray italic'>{categoryName}</span>
            <p className="flex text-xl font-semibold text-blue">{product.prix} Ar</p>
            <h1 className="text-lg font-semibold text-grey-200 mt-5">Description :</h1>
            <p className="text-gray">{product.description_produit}</p>
            {user && (
              <div className="flex mt-5 absolute bottom-5 right-5">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={openModal}
                >
                  Supprimer
                </button>
                <button
                  className="bg-blue text-white px-4 py-2 rounded"
                  onClick={handleEdit}
                >
                  Modifier
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position='bottom-right' pauseOnHover/>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de suppression"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-xl font-semibold mb-4">Confirmation de suppression</h2>
        <p className="mb-6">Êtes-vous sûr de vouloir supprimer ce produit ?</p>
        <div className="flex justify-end">
          <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
            Oui
          </button>
          <button onClick={closeModal} className="bg-gray-300 text-black px-4 py-2 rounded">
            Non
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ShowProduit;