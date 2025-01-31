import { atom } from 'recoil';

export const errorAtom = atom({
  key: 'errorAtom', // clé unique pour cet atom
  default: null,    // état initial : pas d'erreur
});
