import type { ClassName } from '@mono/shared/types';

export interface Props {
  headingTitle: string | undefined;
  headingSubtitle?: string | undefined;
  rightText?: string;
  className?: ClassName;
}
