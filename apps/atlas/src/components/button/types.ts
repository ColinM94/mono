import type { CSSProperties } from 'react';
import type { IconName, Layer } from 'types/general';

interface ButtonPropsBase {
  to?: string;
  label?: string | number;
  icon?: IconName;
  rightIcon?: IconName;
  iconColor?: 'primary' | 'secondary' | 'danger';
  isFormSubmit?: boolean;
  onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  centerLabel?: boolean;
  labelClassName?: string | undefined;
  title?: string;
  // onMouseEnter: HTMLButtonElement["onmouseenter"];
  style?: CSSProperties;
  className?: string | undefined | undefined;
  iconClassName?: string | undefined;
}

interface ButtonPropsGeneral extends ButtonPropsBase {
  type: 'primary' | 'danger' | 'transparent';
}

export interface ButtonPropsSecondary extends ButtonPropsBase {
  type: 'secondary';
  layer?: Layer;
}

export type ButtonProps = ButtonPropsGeneral | ButtonPropsSecondary;
