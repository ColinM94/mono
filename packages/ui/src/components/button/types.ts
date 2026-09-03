import type { Surface } from '@mono/shared/types';
import type { IconName } from '../icon/types.ts';

export interface ButtonProps {
  label?: string;
  type?: HTMLButtonElement['type'];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Default: primary */
  surface?: Surface;
  variant?: 'primary' | 'secondary' | 'danger' | 'icon';
  icon?: IconName;
  disabled?: boolean;
  className?: string;
}
