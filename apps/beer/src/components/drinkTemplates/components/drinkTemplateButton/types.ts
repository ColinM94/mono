import type { DrinkTemplate } from 'types/general.ts';

export interface Props {
  drinkTemplate: DrinkTemplate;
  onEditClick?: (drink: DrinkTemplate) => void;
  onClick: (drink: DrinkTemplate) => void;
  className?: string;
}
