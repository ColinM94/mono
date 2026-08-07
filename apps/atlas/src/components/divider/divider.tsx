import { classes } from '@mono/shared/utils';

import styles from './styles.module.scss';
import type { Props } from './types';

export const Divider = (props: Props) => {
  const { layer } = props;

  return <div className={classes(styles.container, `layer${layer}`)} />;
};
