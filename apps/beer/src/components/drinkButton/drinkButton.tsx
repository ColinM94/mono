import { Icon } from '@mono/ui/components';
import { classes } from '@mono/shared/utils';

import type { DrinkButtonProps } from './types.ts';
import styles from './styles.module.css';

export const DrinkButton = (props: DrinkButtonProps) => {
  const { drink, onClick, className } = props;

  return (
    <div onClick={() => onClick(drink)} className={classes(styles.container, className)}>
      <div className={styles.ml}>{drink.ml}ml</div>
      <Icon name={drink.icon} className={styles.icon} />
      <div className={styles.abv}>{drink.abv}%</div>
    </div>
  );
};
