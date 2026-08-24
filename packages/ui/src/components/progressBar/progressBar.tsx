import { classes } from '@mono/shared/utils';
import type { Surface } from '@mono/shared/types';

import styles from './styles.module.css';

interface Props {
  progressPercentage: number;
  surface?: Surface;
  className?: string;
}

export const ProgressBar = (props: Props) => {
  const { progressPercentage, surface = 1, className } = props;

  return (
    <div className={classes(styles.container, `border-${surface + 1}`, `surface-${surface}`)}>
      <div
        style={{ width: `${progressPercentage}%` }}
        className={classes(styles.progress, `surface-${surface + 1}`, className)}
      />
    </div>
  );
};
