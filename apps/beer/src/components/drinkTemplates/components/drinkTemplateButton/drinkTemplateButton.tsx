import { classes } from '@mono/shared/utils';
import { Icon } from '@mono/ui/components';

import type { Props } from './types.ts';
import styles from './styles.module.css';

export const DrinkTemplateButton = (props: Props) => {
  const { drink, onEditClick, onClick, className } = props;

  return (
    <div onClick={() => onClick(drink)} className={classes(styles.container, className)}>
      <div className={styles.ml}>{drink.ml}ml</div>
      <Icon name={drink?.icon || 'BeerSteinIcon'} className={styles.icon} />
      <div className={styles.abv}>{drink.abv}%</div>
      <Icon name="PencilIcon" onClick={() => onEditClick?.(drink)} className={styles.edit} />
    </div>
  );
};
