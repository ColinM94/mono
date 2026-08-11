import type { ClassName } from '@mono/shared/types';

export interface Props {
  label: string;
  onClick: () => void;
  position: 1 | 2 | 3 | 4;
  className?: ClassName;
}
