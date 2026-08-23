import { classes } from '@mono/shared/utils.ts';
import type { Surface } from '@mono/shared/types.ts';

import styles from './styles.module.css';

interface Props {
  label: string;
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
  /** Default: primary */
  surface?: Surface;
  variant?: 'primary' | 'secondary';
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
  const { label, variant = 'primary', surface = 1, disabled, onClick, className } = props;

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={classes(
        'ui-button',
        `ui-button-${variant}`,
        `surface-${surface}`,
        disabled && styles.disabled,
        styles.container,
        className,
      )}
    >
      <div className={styles.label}>{label}</div>
    </button>
  );
};
