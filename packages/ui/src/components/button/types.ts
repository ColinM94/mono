import type { IconName } from '../icon/types.ts';

export interface ButtonProps {
  label?: string;
  to?: string;
  type?: HTMLButtonElement['type'];
  target?: HTMLAnchorElement['target'];
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
  /** Default: primary */
  surface?: number;
  variant?: 'primary' | 'secondary' | 'danger' | 'icon';
  size?: 'small' | 'medium' | 'large';
  icon?: IconName;
  disabled?: boolean;
  className?: string;
}
