import type { ClassName } from '@mono/shared/types';

export interface Props {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  className?: ClassName;
}
