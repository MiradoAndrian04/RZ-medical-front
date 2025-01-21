// import { TbVideoPlus } from "react-icons/tb";
// import Button from "../components/Button";

import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateFormation = () => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center mt-10">
      <form className="w-[800px] border-[1px] items-center border-gray rounded-lg mx-auto flex flex-col p-5 gap-3 shadow-md">
        <h1 className="font-semibold text-xl">Ajouter un produit</h1>
        <div className="cursor-pointer hover:bg-gray-200 border-dashed border-[1px] border-grey rounded-md h-[120px] w-[100%] flex flex-col justify-center items-center">
          {/* <TbVideoPlus size={50} className="font-light text-grey" /> */}
          <FontAwesomeIcon icon={faFileImage} size="3x" className="font-light text-blue" />
          <p className="text-blue">Ajouter une image</p>
        </div>
        <div className="w-[100%]">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Categorie
          </label>
          <select
            id="category"
            placeholder="Categorie"
            className=" border  border-grey text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
          >
            <option selected>Choisire votre categorie</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="w-[100%]">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Titre
          </label>
          <input
            type="text"
            id="title"
            className=" border border-grey text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Titre"
            required
          />
        </div>
        <div className="w-[100%]">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-grey "
            placeholder="Description du cours..."
          ></textarea>
        </div>
        <div className="flex justify-end w-[100%]">
          {/* <Button
            text={"Ajouter formation"}
            className={
              "bg-green hover:bg-greenFocus p-3 px-[60px] text-white mt-0 rounded-lg"
            }
          /> */}
        </div>
      </form>
    </div>
  );
};

export default CreateFormation;
