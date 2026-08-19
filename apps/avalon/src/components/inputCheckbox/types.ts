import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  heading?: string;
  headingSubtitle?: string;
  value: boolean;
  setValue: (value: boolean) => void;
  className?: ClassName;
}
