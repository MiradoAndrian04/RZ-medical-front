import ProduitCard from "./ProduitCard"

const ProduitsAll = () => {
  return (
    <div className="flex w-full gap-1 p-2 pt-0 flex-row flex-wrap bg-[#f0f0f0] rounded-lg ">
          <ProduitCard
            src="../../public/img/gants-nitrile-chirurgicaux.png"
            titre="Gants plastiques"
            className={"w-[24.5%] max-md:w-[32.8%] max-sm:w-[48.5%]"}
          />
          <ProduitCard
            src="../../public/img/tension.jpeg"
            titre="Tensionmètre"
            className={"w-[24.5%] max-md:w-[32.8%] max-sm:w-[48.5%]"}
          />
          <ProduitCard
            src="../../public/img/Thermomètre.jpeg"
            titre="Thermomètre"
            className={"w-[24.5%] max-md:w-[32.8%] max-sm:w-[48.5%]"}
          />
          <ProduitCard
            src="../../public/img/gants-nitrile-chirurgicaux.png"
            titre="Gants plastiques Gants plastiques"
            className={"w-[24.5%] max-md:w-[32.8%] max-sm:w-[48.5%]"}
          />
          <ProduitCard
            src="../../public/img/tension.jpeg"
            titre="Tensionmètre"
            className={"w-[24.5%] max-md:w-[32.8%] max-sm:w-[48.5%]"}
          />
          <ProduitCard
            src="../../public/img/Thermomètre.jpeg"
            titre="Thermomètre"
            className={"w-[24.5%] max-md:w-[32.8%] max-sm:w-[49.5%]"}
          />
        </div>
  )
}

export default ProduitsAll