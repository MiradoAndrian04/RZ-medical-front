
function ProduitCard({titre,src,className}) {
  const defaultClassName="'w-full aspect-square rounded-lg bg-center bg-cover bg-no-repeat border-[1px] border-gray-100'"
  return (
    <div className='w-[23vw] max-lg:w-[30vw] max-sm:w-[42vw] flex flex-col my-3 mx-3'>
      <a href="#">
    <div className={`${defaultClassName || className}`} style={{backgroundImage:`url(${src})`}}></div>
    <div className='flex text-[17px] font-semibold mt-3 text-gray justify-center'>{titre}</div>
    </a>
    </div>
  )
}

export default ProduitCard