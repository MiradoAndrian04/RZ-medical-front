// eslint-disable-next-line react/prop-types
function ProduitCard({ titre, src, className }) {
  const defaultClassName =" mt-3 hover:shadow-md hover:shadow-grey-300 rounded-xl p-1";
    ;
  return (
    <div className ={`${defaultClassName} ${className || ''}`}>
        <div
          className='w-full aspect-square rounded-lg bg-center bg-cover bg-no-repeat border-[1px] border-gray-100'
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div className="flex text-[17px] font-semibold mt-3 text-gray justify-center text-center">
          {titre}
        </div>
    </div>
  );
}

export default ProduitCard;
