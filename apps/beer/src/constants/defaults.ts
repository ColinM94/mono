import { generateUniqueId } from '@mono/shared/utils';
import type { Drink, DrinkTemplate } from 'types/general.ts';

export const defaultDrinkTemplate = (): DrinkTemplate => ({
  id: generateUniqueId(),
  name: '',
  ml: 0,
  abv: 0,
  icon: 'BeerBottleIcon',
  gramsOfAlcohol: 0,
});

export const defaultDrink = (): Drink => ({
  ...defaultDrinkTemplate(),
  time: 0,
});
