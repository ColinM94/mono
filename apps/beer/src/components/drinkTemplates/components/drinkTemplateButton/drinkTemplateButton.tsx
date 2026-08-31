import { classes } from '@mono/shared/utils';
import { Icon } from '@mono/ui/components';

import type { Props } from './types.ts';
import styles from './styles.module.css';

export const DrinkTemplateButton = (props: Props) => {
  const { drinkTemplate, onEditClick, onClick, className } = props;

  return (
    <div onClick={() => onClick(drinkTemplate)} className={classes(styles.container, className)}>
      <div className={styles.ml}>{drinkTemplate.ml}ml</div>
      <Icon name={drinkTemplate?.icon || 'BeerSteinIcon'} className={styles.icon} />
      <div className={styles.abv}>{drinkTemplate.abv}%</div>
      <Icon
        name="PencilIcon"
        onClick={(e) => {
          e.stopPropagation();
          onEditClick?.(drinkTemplate);
        }}
        className={styles.edit}
      />
    </div>
  );
};
