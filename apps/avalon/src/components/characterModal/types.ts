import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  characterId: string;
  show: boolean;
  setShow: (show: boolean) => void;
  headingTitle?: string;
  headingSubtitle?: string;
  className?: ClassName;
}
