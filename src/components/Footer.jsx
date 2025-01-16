import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-black py-10 bg-cover bg-center " style={{ backgroundImage: "url('/img/foot.png')",}}>
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h2 className='text-lg font-semibold mb-4'>A PROPOS DE RZ MEDICAL</h2>
                <p className='text-sm'>RZ medical est une entreprise specialise dans le developpement , la production et la distribution d'equipements et de solutions medicales innovantes.Notre mission est d'ameliorer la qulaite des soins de sante en proposant des produits fiables , performants et adaptes aux besoins des professionnels et des patients </p>
            </div>
            <div>
                <h2 className='text-lg font-semibold mb-4'>CONTACTER-NOUS</h2>
                <p className='text-sm '>Lot 121 Antananarivo</p>
                <p className='text-sm'>+261 32 001 0001</p>
                <p className='text-sm'>rzmedical@gmail.com</p>
            </div>
            <div>
                <h2 className='text-lg font-semibold mb-4'>CATEGORIE DE PRODUIT</h2>
                <ul className='text-sm space-y-2'>
                    <li>-New porducts</li>
                    <li>-Air protection products</li>
                    <li>-Clinical & Analytical instrument</li>
                    <li>-Disinfection & Sterilization</li>
                    <li>-Lab & Medical Cryogenic </li>
                    <li>-Laboratory products</li>
                    <li>-Laboratory Equipements</li>
                </ul>
            </div>
        </div>
        <div className='mt-10 text-center text-sm'>
            Copyright 2025 Eray Digital
        </div>
    </footer>
  )
}

export default Footer;