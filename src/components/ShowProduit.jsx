import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import { productAtom } from '../atoms/productsAtom';

const ShowProduit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const user = useRecoilValue(userAtom);
  const setProducts = useSetRecoilState(productAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/post/products/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du produit');
        }
        const data = await response.json();
        setProduct(data);

        // Récupérer le nom de la catégorie
        const categoryResponse = await fetch(`/api/post/categories/${data.category}`);
        if (!categoryResponse.ok) {
          throw new Error('Erreur lors de la récupération de la catégorie');
        }
        const categoryData = await categoryResponse.json();
        setCategoryName(categoryData.name);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?');
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`/api/post/products/${id}/delete`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du produit');
      }

      // Mettre à jour la liste des produits
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));

      navigate('/products');
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEdit = () => {
    navigate(`/admin/edit-product/${id}`);
  };

  if (!product) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="flex w-full gap-1 p-3 pt-0 flex-row flex-wrap bg-[#f0f0f0] rounded-lg relative">
      <div className="flex flex-row mt-3">
        <div className="flex flex-row max-md:flex-col h-auto mx-auto">
          <img src={`${import.meta.env.VITE_APP_API_URL}${product.image}`} alt={product.name} className="w-[300px] h-[300px] max-md:w-full max-md:h-[35vw] rounded-lg object-contain border"/>
          <div className="flex flex-col flex-1 h-auto mt-3 p-3">
            <h1 className="text-3xl text-grey-100 font-semibold">{product.name}</h1>
            <span className='text-gray italic'>{categoryName}</span>
            <p className="flex text-xl font-semibold text-blue">5.000 Ar</p>
            <h1 className="text-lg font-semibold text-grey-200 mt-5">Description :</h1>
            <p className="text-gray">{product.description}</p>
            {user && (
              <div className="flex mt-5 absolute bottom-5 right-5">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleDelete}
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
    </div>
  );
};

export default ShowProduit;