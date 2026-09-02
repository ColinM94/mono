import { classes } from '@mono/shared/utils';

import styles from './styles.module.css';
import { Icon } from '../icon/icon.tsx';
import type { ButtonProps } from './types.ts';

/**
 * Classes
 * .ui-button
 * .ui-button-primary
 * .ui-button-secondary
 **/
export const Button = (props: ButtonProps) => {
  const { label, variant = 'primary', surface = 1, icon, disabled, onClick, className } = props;

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={classes(
        'ui-button',
        `ui-button-${variant}`,
        variant === 'secondary' && `surface-${surface}`,
        variant === 'secondary' && `surface-${surface + 1}-hover`,
        styles[`variant-${variant}`],
        !label && icon && styles.square,
        disabled && styles.disabled,
        styles.container,
        className,
      )}
    >
      {label && <div className={styles.label}>{label}</div>}
      {icon && <Icon name={icon} className={styles.icon} />}
    </button>
  );
};
