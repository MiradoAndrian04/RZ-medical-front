import React from 'react'

function ProduitCard({titre,src,className}) {
  const defaultClassName="'w-full h-[300px] rounded-lg bg-center bg-cover bg-no-repeat border-[1px] border-gray'"
  return (
    <div className='w-[286px] h-[320px] flex flex-col my-3 mx-3'>
      <a href="#">
    <div className={`${className || defaultClassName}`} style={{backgroundImage:`url(${src})`}}></div>
    <div className='flex text-[17px] font-normal mt-3 text-gray justify-center'>{titre}</div>
    </a>
    </div>
  )
}

export default ProduitCard