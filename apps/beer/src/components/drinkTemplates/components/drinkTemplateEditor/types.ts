import type { Drink } from 'types/general.ts';

export interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  existingDrink: Drink | undefined;
  className?: string;
}
