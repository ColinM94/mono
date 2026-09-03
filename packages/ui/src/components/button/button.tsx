import { classes } from '@mono/shared/utils';

import styles from './styles.module.css';
import { Icon } from '../icon/icon.tsx';
import type { ButtonProps } from './types.ts';

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    label,
    variant = 'primary',
    surface = 1,
    icon,
    disabled,
    onClick,
    className,
  } = props;

  return (
    <button
      type={type}
      onClick={(e) => onClick?.(e)}
      disabled={disabled}
      className={classes(
        'ui-button',
        `ui-button-${variant}`,
        variant === 'secondary' && `surface-${surface}`,
        variant === 'secondary' && `surface-${surface + 1}-hover`,
        styles[`variant-${variant}`],
        !label && icon && styles.square,
        styles.container,
        className,
      )}
    >
      {label && <span className={styles.label}>{label}</span>}
      {icon && <Icon name={icon} className={styles.icon} />}
    </button>
  );
};
