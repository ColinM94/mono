import * as React from 'react';
import { ProgressBar } from '@mono/ui/components';
import { classes, formatTime } from '@mono/shared/utils';

import { calculateStats } from 'components/utils/stats.ts';
import { Stats } from 'components/stats/stats.tsx';
import { DrinkTemplates } from 'components/drinkTemplates/drinkTemplates.tsx';
import { MainLayout } from 'components/mainLayout/mainLayout.tsx';
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

  const handleDelete = (index: number) => {
    const updatedDrinks = drinks.toSpliced(index, 1);
    useAppStore.setState({ drinks: updatedDrinks });
    calculateStats();
  };

  return (
    <MainLayout className={styles.container}>
      <ProgressBar
        progressPercentage={(100 / maxBloodAlcoholPerMille) * bloodAlcoholPerMille}
        barClassName={classes(
          bloodAlcoholPerMille >= maxBloodAlcoholPerMille * 0.75 && styles.progressBarDanger,
        )}
      />

      <Stats />

      {drinks.map((beer, index) => (
        <div key={index}>
          <span>{formatTime(beer.time)}: </span>
          <span>
            {beer.name} - {beer.ml}ml - {beer.abv}%
          </span>
          <span onClick={() => handleDelete(index)} className={styles.delete}>
            X
          </span>
        </div>
      ))}

      <DrinkTemplates />
    </MainLayout>
  );
};
