import styles from './styles.module.css';
import type { StatCardsProps, StatCardsStat } from './types.ts';

export const StatCards = (props: StatCardsProps) => {
  const { stats } = props;

  const statCard = (stat: StatCardsStat) => (
    <div className={styles.stat}>
      <div className={styles.statLabel}>{stat.label}</div>
      <div className={styles.statValue}>{stat.value}</div>
    </div>
  );

  return <div className={styles.container}>{stats.map((stat) => statCard(stat))}</div>;
};
