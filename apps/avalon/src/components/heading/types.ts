import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  headingTitle: string | undefined;
  headingSubtitle?: string | undefined;
  rightText?: string;
  className?: ClassName;
}
