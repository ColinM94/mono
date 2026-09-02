import { formatTime } from '@mono/shared/utils';
import { Button, Card, Icon } from '@mono/ui/components';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import { calculateStats } from 'components/utils/stats.ts';

import styles from './styles.module.css';
import type { Props } from './types.ts';

export const Drinks = (props: Props) => {
  const { className } = props;

  const { drinks } = useAppStore();

  const handleDelete = (index: number) => {
    const updatedDrinks = drinks.toSpliced(index, 1);
    useAppStore.setState({ drinks: updatedDrinks });
    calculateStats();
  };

  return (
    <Card
      header={{
        heading: 'Drinks',
      }}
      surface={1}
      contentClassName={styles.content}
      className={className}
    >
      {drinks
        .sort((a, b) => b.time - a.time)
        .map((beer, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.time}>{formatTime(beer.time)}</div>
            <Icon name={beer.icon} />
            <div className={styles.name}>{beer.name}</div>
            <div>{beer.ml}ml</div>
            <div className={styles.percentage}>{beer.abv}%</div>

            <Button
              variant="secondary"
              onClick={() => handleDelete(index)}
              icon="XIcon"
              surface={2}
            />
          </div>
        ))}

      {drinks.length === 0 && (
        <div className={styles.noDrinksMessage}>You haven't added a drink yet</div>
      )}
    </Card>
  );
};
