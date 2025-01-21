
function ShowProduit() {
  return (
    <div className="flex w-full gap-1 p-3 pt-0 flex-row flex-wrap bg-[#f0f0f0] rounded-lg">
      <div className="flex flex-row mt-3">
        <div className="flex flex-row max-md:flex-col h-auto mx-auto">
          <img src="/img/materiel.png" alt="produits" className="w-[300px] h-[300px] max-md:w-full max-md:h-[35vw] rounded-lg object-contain border"/>
          <div className="flex flex-col flex-1 h-auto mt-3 p-3">
            <h1 className="  text-3xl text-grey-100 font-semibold ">Gant médical</h1>
            <p className="flex text-xl font-semibold text-blue">
               5.000 Ar
            </p>
            <h1 className=" text-lg font-semibold text-gray mt-5">
              Introduction :
            </h1>
            <p className=" text-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type It has survived not only five
              centuries, but also the leap into electronic It was popularised in
              the 1960s with the release of Letraset sheets containing Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduit;
