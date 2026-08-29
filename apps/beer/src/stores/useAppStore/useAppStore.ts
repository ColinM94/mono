import { createStore, createStoreSelector } from '@mono/zustand/utils';
import type { Drink } from 'types/general.ts';

type AppStoreState = {
  drinks: Drink[];
  maxBloodAlcoholPerMille: number;
  bloodAlcoholPerMille: number;
  totalAlcoholGrams: number;
  totalAlcoholMl: number;
  customDrinks: Drink[];
  weightKg: number;
  gender: 'male' | 'female';
};

export const useAppStore = createStore<AppStoreState>(
  () => ({
    drinks: [],
    weightKg: 70,
    maxBloodAlcoholPerMille: 2,
    bloodAlcoholPerMille: 0,
    gender: 'male',
    totalAlcoholGrams: 0,
    totalAlcoholMl: 0,
    customDrinks: [],
  }),
  {
    name: 'app',
  },
);

export const useAppStoreSlice = createStoreSelector(useAppStore);
