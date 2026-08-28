import { roundNumber } from '@mono/shared/utils';
import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import styles from './styles.module.scss';

export const Stats = () => {
  const { bloodAlcoholPerMille, totalAlcoholGrams, totalAlcoholMl, maxBloodAlcoholPerMille } =
    useAppStore();

  const stat = (label: string, value: string | number) => (
    <div className={styles.stat}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue}>{value}</div>
    </div>
  );

  return (
    <div className={styles.container}>
      {stat('Alcohol Consumed', `${totalAlcoholMl}ml`)}
      {stat('Pure Alcohol Consumed', `${roundNumber(totalAlcoholGrams, 2)}g`)}
      {stat('Blood Alchohol', `${roundNumber(bloodAlcoholPerMille, 2)}ml`)}
      {stat('Blood Alchohol', `${roundNumber(bloodAlcoholPerMille / 10, 2)}%`)}
      {stat('Max Blood Alcohol', `${maxBloodAlcoholPerMille}ml`)}
    </div>
  );
};
