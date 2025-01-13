import React from 'react'

function ProduitCard() {
  return (
  <div className='flex flex-col'>
    <div className='flex space-x-5 w-50 h-[300px] mt-5'>
        <div className='rounded-md ml-[9.3%] w-[40%] h-[216px] bg-[url("./img/produit.jpg")] bg-cover bg-no-repeat'>
        <p className='font-medium text-white text-lg ml-[72%]'>Tout nos produits</p>
        <div className='w-full h-[216px] mt-[-30px] bg-black opacity-10 rounded-md'></div>
            </div>
        <div className='rounded-md w-[40%] h-[216px] bg-[url("./img/contact.jpg")]'>
        <p className='font-medium text-white text-lg ml-[72%]'>Contactez-Nous</p>
        <div className='w-full h-[216px] mt-[-30px] bg-black opacity-10 rounded-md'></div>
        </div>
    </div>
    <div className="w-[81.5%] h-[550px] ml-[9.3%] overflow-hidden">
  <img src="../../public/img/RZimg.jpeg" alt="Example" className="object-cover w-full h-full" />
</div>
    <div className='flex flex-col w-[85%] h-auto mt-5 ml-[7.5%]'>
        <h1 className='flex justify-center text-3xl text-blue font-semibold'>Nos services</h1>
        <div className='flex flex-row w-full h-auto mt-5'>
            <div className='w-[30%] h-[250px] bg-red-600 ml-[5%]'></div>
            <div className='w-[70%] h-[250px] bg-red-600 ml-[3%]'>
                <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
It has survived not only five centuries, but also the leap into electronic 
It was popularised in the 1960s with the release of Letraset sheets containing 
 Aldus PageMaker including versions of Lorem Ipsum.
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
It has survived not only five centuries, but also the leap into electronic 
It was popularised in the 1960s with the release of Letraset sheets containing 
 Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        
        <div className='flex flex-row w-full h-[255px] mt-5 border-black border-2'>
            <div className='w-[70%] h-[250px] bg-red-600 ml-[5%]'>
            <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
It has survived not only five centuries, but also the leap into electronic 
It was popularised in the 1960s with the release of Letraset sheets containing 
 Aldus PageMaker including versions of Lorem Ipsum.
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
It has survived not only five centuries, but also the leap into electronic 
It was popularised in the 1960s with the release of Letraset sheets containing 
 Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='w-[30%] h-[250px] bg-red-600 ml-[3%]'></div>
        </div>

        <div className='flex flex-row w-full h-auto mt-5'>
            <div className='w-[30%] h-[250px] bg-red-600 ml-[5%]'></div>
            <div className='w-[70%] h-[250px] bg-red-600 ml-[3%]'>
                <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
It has survived not only five centuries, but also the leap into electronic 
It was popularised in the 1960s with the release of Letraset sheets containing 
 Aldus PageMaker including versions of Lorem Ipsum.
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
It has survived not only five centuries, but also the leap into electronic 
It was popularised in the 1960s with the release of Letraset sheets containing 
 Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ProduitCard