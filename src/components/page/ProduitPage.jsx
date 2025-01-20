import React from 'react'
import ProduitCard from '../ProduitCard'
import { Link } from 'react-router-dom'


function ProduitPage() {
  return (
    <div className='flex flex-col w-full h-[680px]'>
      <div className="w-full h-[250px]">
  <img src="../../public/img/RZ.jpeg" alt="Example" className="object-cover w-full h-full" />
</div>
<div className='flex flex-row mt-3'>
  <div className='flex flex-col w-[70%] h-[400px] ml-32'>
    <h1 className='text-2xl font-semibold mx-3 my-3'>Tous nos produits</h1>
    <div className='flex flex-row flex-wrap'>
    <Link to="produit-show">
    <ProduitCard 
    src="../../public/img/gants-nitrile-chirurgicaux.png"
    titre="Gants plastiques"
    />
    </Link>
    <ProduitCard
    src="../../public/img/tension.jpeg"
    titre="Tensionmètre"
    />
    <ProduitCard
    src="../../public/img/Thermomètre.jpeg"
    titre="Thermomètre"/>
    </div>
  </div>
  <div className='flex flex-col w-[30%] h-[500px] ml-11'>
      <div className='w-[95%] h-10 mx-3'>
        <input type="text" placeholder='Rechercher' className='w-full h-10 rounded-full pl-3 border-2 border-gray'/>
      </div>
      <div className='w-[80%] h-[310px] border-[1px] border-gray ml-11 mt-7'>
        <div className='w-full h-12 bg-blue'>
          <h1 className='flex justify-center py-2 text-xl font-semibold text-white'>Catégories</h1>
        </div>
        <div>
          <ul className='w-full'>
            <a href="#" className='flex w-full py-5 justify-center hover:bg-lightblue'><li>Analgésiques & Antipyrétiques</li></a>
            <a href="#" className='flex w-full py-5 justify-center hover:bg-lightblue'><li>Antibiotiques</li></a>
            <a href="#" className='flex w-full py-5 justify-center hover:bg-lightblue'><li>Antihistaminiques</li></a>
            <a href="#" className='flex w-full py-5 justify-center hover:bg-lightblue'><li>Cardiovasculaires</li></a>
          </ul>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default ProduitPage