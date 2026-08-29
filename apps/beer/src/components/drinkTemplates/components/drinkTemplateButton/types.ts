import type { Drink } from 'types/general.ts';

export interface Props {
  drink: Drink;
  onEditClick?: (drink: Drink) => void;
  onClick: (drink: Drink) => void;
  className?: string;
}
