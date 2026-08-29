import type { Drink } from 'types/general.ts';

export interface Props {
  drink: Pick<Drink, 'name' | 'ml' | 'abv' | 'icon'>;
  onClick: (drink: DrinkButtonProps['drink']) => void;
  className?: string;
}
