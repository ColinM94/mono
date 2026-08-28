import * as React from 'react';
import { Button, InputText, ProgressBar } from '@mono/ui/components';
import { classes, formatTime, generateUniqueId } from '@mono/shared/utils';

import { DrinkButton } from 'components/drinkButton/drinkButton.tsx';
import { Stats } from 'components/stats/stats.tsx';
import { MainLayout } from 'components/mainLayout/mainLayout.tsx';
import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import type { Drink } from 'types/general.ts';

import styles from './styles.module.css';

export const HomePage = () => {
  const { drinks, weightKg, bloodAlcoholPerMille, maxBloodAlcoholPerMille, gender } = useAppStore();

  const [customMl, setCustomMl] = React.useState(0);
  const [customAbv, setCustomAbv] = React.useState(0);
  const [customName, setCustomName] = React.useState('Beer');

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

  const calculateStats = () => {
    const { drinks } = useAppStore.getState();

    const totals = drinks.reduce(
      (acc, item) => {
        acc.ml += item.ml;
        acc.grams += item.gramsOfAlcohol;
        return acc;
      },
      { grams: 0, ml: 0 },
    );

    useAppStore.setState({
      totalAlcoholGrams: totals.grams,
      totalAlcoholMl: totals.ml,
    });
  };

  const addBeer = (newDrink: Pick<Drink, 'name' | 'ml' | 'abv'>) => {
    const gramsOfAlcohol = newDrink.ml * (newDrink.abv / 100) * 0.789;

    const updatedDrinks: Drink[] = [
      ...drinks,
      {
        ...newDrink,
        gramsOfAlcohol,
        time: Date.now(),
        name: newDrink.name || 'Beer',
        id: generateUniqueId(),
        icon: '',
      },
    ];

    useAppStore.setState({
      drinks: updatedDrinks,
    });

    calculateStats();
  };

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

      <div>
        <h3>Custom Drink</h3>
        <div>
          Name
          <InputText value={customName} setValue={(value) => setCustomName(value)} />
        </div>
        <br />

        <div>
          ML
          <InputText value={String(customMl)} setValue={(value) => setCustomMl(Number(value))} />
        </div>
        <br />
        <div>
          Abv
          <InputText value={String(customAbv)} setValue={(value) => setCustomAbv(Number(value))} />
        </div>
      </div>

      <Button
        label="Add Custom Drink"
        onClick={() => {
          addBeer({
            abv: customAbv,
            ml: customMl,
            name: customName,
          });

          setCustomAbv(0);
          setCustomMl(0);
          setCustomName('Beer');
        }}
        className={styles.addCustomButton}
      />

      <h3>Preset Drinks</h3>
      <div className={styles.drinkButtons}>
        <DrinkButton
          drink={{ name: 'Kölsch', abv: 5, ml: 200, icon: 'BeerSteinIcon' }}
          onClick={(drink) => addBeer(drink)}
          className={styles.drinkButton}
        />
      </div>
    </MainLayout>
  );
};
