import type { ClassName } from '@mono/shared/types';

export interface Props {
  direction?: 'horizontal' | 'vertical';
  label?: string;
  description?: string;
  className?: ClassName;
}
