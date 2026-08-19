import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  direction?: 'horizontal' | 'vertical';
  label?: string;
  description?: string;
  className?: ClassName;
}
