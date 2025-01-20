
function ShowProduit() {
  return (
    <div className="flex w-full gap-1 p-3 pt-0 flex-row flex-wrap bg-[#f0f0f0] rounded-lg">
      <div className="flex flex-row mt-3">
        <div className="flex flex-row max-md:flex-col h-auto mx-auto">
          <img src="/img/materiel.png" alt="produits" className="w-[300px] h-[300px] max-md:w-full max-md:h-[35vw] rounded-lg object-contain border"/>
          <div className="flex flex-col flex-1 h-auto mt-3">
            <h1 className="mx-3 my-2 text-3xl text-grey-100 font-semibold mb-3">Gant médical</h1>
            <h1 className="mx-3 text-lg font-semibold text-gray">
              Introduction :
            </h1>
            <p className="px-3 text-gray">
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
            <p className="flex text-2xl font-semibold justify-end text-blue">
              Prix : 5.000 Ar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduit;
