import type { DrinkTemplate } from 'types/general.ts';

export interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  existingTemplate: DrinkTemplate | undefined;
  setExistingTemplate: (template: DrinkTemplate | undefined) => void;
}
