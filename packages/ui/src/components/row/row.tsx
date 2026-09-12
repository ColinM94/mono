import { classes } from '@mono/shared/utils';

import styles from './styles.module.css';
import type { RowProps } from './types.ts';

export const Row = (props: RowProps) => {
  const { children, className } = props;

  return <div className={classes(styles.container, className)}>{children}</div>;
};
