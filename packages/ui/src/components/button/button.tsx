import { classes } from '@mono/shared/utils';
import type { Surface } from '@mono/shared/types';

import styles from './styles.module.css';
import type { IconName } from '../icon/types.ts';
import { Icon } from '../icon/icon.tsx';

interface Props {
  label?: string;
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
  /** Default: primary */
  surface?: Surface;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: IconName;
  disabled?: boolean;
  className?: string;
}

/**
 * Classes
 * .ui-button
 * .ui-button-primary
 * .ui-button-secondary
 **/
export const Button = (props: Props) => {
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
