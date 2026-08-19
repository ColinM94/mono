import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  className?: ClassName;
}
