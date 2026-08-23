import type { ClassName } from '@mono/shared/types';

export interface Props {
  heading?: string;
  headingSubtitle?: string;
  value: boolean;
  setValue: (value: boolean) => void;
  className?: ClassName;
}
