import type { IconName } from '@mono/ui/components';

export interface Drink extends DrinkTemplate {
  time: number;
}

export interface DrinkTemplate {
  id: string;
  name: string;
  ml: number;
  abv: number;
  icon: IconName;
  gramsOfAlcohol: number;
}
