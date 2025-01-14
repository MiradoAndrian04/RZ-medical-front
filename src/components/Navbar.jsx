import React, { useState } from 'react';

function Navbar() {
    const [isOpen , setIsOpen] = useState(false);
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto flex items-center justify-between py-4 px-6'>
            <div className='font-bold text-gray-700 border border-gray-300 px-4 py-2'>
                VOTRE LOGO
            </div>

            <button className='text-gray-700 block md:hidden' onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns='http://www.w3.org/2000svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'/>    
                </svg>    
            </button> 
            <div className={`${
                    isOpen ? "block" : "hidden"
                 } md:flex md:space-x-6 text-gray-700 font-semibold`}
            >
                <a href='' className='hover:text-blue-300 block py-2 md:py-0'>Produits</a>
                <a href='' className='hover:text-blue-300 block py-2 md:py-0'>Services</a>
                <a href='' className='hover:text-blue-300 block py-2 md:py-0'>A propos</a>
                <a href='' className='hover:text-blue-300 block py-2 md:py-0'>Avantages</a>
                <a href='' className='hover:text-blue-300 block py-2 md:py-0'>Contacter-nous</a>
            </div>
            <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
                <button className='text-gray-700 hover:text-blue-500'>
                    <svg xmlns='"http://www.w3.org/2000/svg'  fill='none' viewBox='0 0 24 24' strokeWidth= '2' stroke='currentColor' className='w-6 h-6'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-4.35-4.35m2.85-6.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z '
                        />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;