import type { IconName } from '@mono/ui/components';

export type Drink = {
  id: string;
  name: string;
  ml: number;
  time: number;
  abv: number;
  icon: IconName;
  gramsOfAlcohol: number;
};
