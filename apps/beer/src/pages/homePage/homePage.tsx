import * as React from 'react';
import { ProgressBar } from '@mono/ui/components';
import { classes } from '@mono/shared/utils';

import { Stats } from 'components/stats/stats.tsx';
import { DrinkTemplates } from 'components/drinkTemplates/drinkTemplates.tsx';
import { MainLayout } from 'components/mainLayout/mainLayout.tsx';
import { Drinks } from 'components/drinks/drinks.tsx';
import { useAppStore } from 'stores/useAppStore/useAppStore.ts';

import styles from './styles.module.css';

export const HomePage = () => {
  const { drinks, weightKg, bloodAlcoholPerMille, maxBloodAlcoholPerMille, gender } = useAppStore();

  const totals = drinks.reduce(
    (acc, item) => {
      acc.ml += item.ml;
      acc.grams += item.gramsOfAlcohol;
      return acc;
    },
    { grams: 0, ml: 0 },
  );

  React.useEffect(() => {
    const calculateBAC = () => {
      if (drinks.length === 0) {
        useAppStore.setState({ bloodAlcoholPerMille: 0 });
        return;
      }

      const timeOfFirstDrink = [...drinks].sort((a, b) => a.time - b.time)[0]?.time || Date.now();
      const hoursSinceFirstDrink = (Date.now() - timeOfFirstDrink) / 3600000;

      const rawBAC =
        totals.grams / (weightKg * (gender === 'male' ? 0.68 : 0.55)) - 0.16 * hoursSinceFirstDrink;

      useAppStore.setState({
        bloodAlcoholPerMille: Math.max(0, rawBAC),
      });
    };

    calculateBAC();

    const interval = setInterval(calculateBAC, 1000);
    return () => clearInterval(interval);
  }, [drinks, totals.grams, weightKg, gender]);

  const percentage = () => {
    let value = Math.max(100 - (bloodAlcoholPerMille / maxBloodAlcoholPerMille) * 100, 0);
    return value;
  };

  return (
    <MainLayout className={styles.container}>
      <ProgressBar
        progressPercentage={percentage()}
        barClassName={classes(
          bloodAlcoholPerMille >= maxBloodAlcoholPerMille * 0.75 && styles.progressBarDanger,
        )}
      />

      <Stats />

      <Drinks />

      <DrinkTemplates />
    </MainLayout>
  );
};
