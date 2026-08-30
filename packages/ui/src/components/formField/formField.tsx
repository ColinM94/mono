import { classes } from '@mono/shared/utils';

import type { FormFieldProps } from './types.ts';
import styles from './styles.module.css';

export const FormField = (props: FormFieldProps) => {
  const { label, children, inputClassName, className } = props;

  return (
    <label className={classes(styles.container, className)}>
      <div className={styles.label}>{label}</div>
      <div className={classes(styles.input, inputClassName)}>{children}</div>
    </label>
  );
};
