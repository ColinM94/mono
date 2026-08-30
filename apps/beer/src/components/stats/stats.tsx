import { roundNumber } from '@mono/shared/utils';
import { StatCards } from '@mono/ui/components';
import { useAppStore } from 'stores/useAppStore/useAppStore.ts';

export const Stats = () => {
  const { bloodAlcoholPerMille, totalAlcoholGrams, totalAlcoholMl, maxBloodAlcoholPerMille } =
    useAppStore();

  return (
    <StatCards
      stats={[
        {
          label: 'Alcohol Consumed',
          value: `${totalAlcoholMl}ml`,
        },
        {
          label: 'Pure Alcohol Consumed',
          value: `${roundNumber(totalAlcoholGrams, 2)}g`,
        },
        {
          label: 'Blood Alcohol',
          value: `${roundNumber(bloodAlcoholPerMille, 2)}%`,
        },
        {
          label: 'Blood Alcohol',
          value: `${roundNumber(bloodAlcoholPerMille / 10, 2)}%`,
        },
        {
          label: 'Max Blood Alcohol',
          value: `${maxBloodAlcoholPerMille}ml`,
        },
      ]}
    />
  );
};
