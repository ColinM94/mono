import { classes } from '@mono/shared/utils';

import type { FormFieldProps } from './types.ts';
import styles from './styles.module.css';

export const FormField = (props: FormFieldProps) => {
  const { label, children, className } = props;

  return (
    <label className={classes(styles.container, className)}>
      <div className={styles.label}>{label}</div>
      <div className={styles.input}>{children}</div>
    </label>
  );
};
