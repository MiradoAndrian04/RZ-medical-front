import { atom } from "recoil";

export const productAtom = atom({
  key: "productAtom", // Identifiant unique
  default: [], // Par défaut, liste vide
});
