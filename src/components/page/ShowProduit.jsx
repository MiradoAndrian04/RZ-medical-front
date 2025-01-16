import React from 'react'
import ProduitCard from '../ProduitCard'

function ShowProduit() {
  return (
    <div className='flex flex-col w-full h-[680px]'>
      <div className="w-full h-[250px]">
  <img src="../../public/img/RZ.jpeg" alt="Example" className="object-cover w-full h-full" />
</div>
<div className='flex flex-row mt-3'>
  <div className='flex flex-row w-[70%] h-[400px] ml-32'>
    <ProduitCard
    src="../../public/img/gants-nitrile-chirurgicaux.png"
    />
    <div className='flex flex-col flex-wrap w-[65%] h-[385px] ml-5 mt-3'>
        <h1 className='mx-3 my-2 text-3xl text-gray'>Gant médical</h1>
        <br />
        <h1 className='mx-3 text-lg font-semibold text-gray'>Introduction :</h1>
        <p className='px-3 text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
It has survived not only five centuries, but also the leap into electronic 
It was popularised in the 1960s with the release of Letraset sheets containing 
 Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br /><br />
        <p className='flex text-2xl font-semibold justify-end'>Prix : 5.000 Ar</p>
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

export default ShowProduit