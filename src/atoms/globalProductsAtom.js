import { atom } from 'recoil';

// Atome pour stocker tous les produits
export const allProductsAtom = atom({
  key: 'allProductsAtom',
  default: [],
});

// Atome pour stocker la recherche actuelle
export const searchQueryAtom = atom({
  key: 'searchQueryAtom',
  default: '',
});

// Atome pour stocker les produits filtrés
export const filteredProductsAtom = atom({
  key: 'filteredProductsAtom',
  default: [],
});