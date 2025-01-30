import { atom } from 'recoil';

export const searchAtom = atom({
  key: 'searchTerm', // Unique ID for the atom
  default: '', // Default value is an empty string
});