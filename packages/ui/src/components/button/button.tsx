import { classes } from '@mono/shared/utils.ts';

import styles from './styles.module.css';

interface Props {
  label: string;
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
  /** Default: primary */
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * Classes
 * .ui-button
 * .ui-button-primary
 * .ui-button-secondary
 **/
export const Button = (props: Props) => {
  const { label, variant = 'primary', onClick, className } = props;

  return (
    <button
      type="submit"
      onClick={onClick}
      className={classes('ui-button', `ui-button-${variant}`, styles.container, className)}
    >
      <div className={styles.label}>{label}</div>
    </button>
  );
};
