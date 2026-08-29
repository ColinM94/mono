import { useAppStore } from 'stores/useAppStore/useAppStore.ts';

export const calculateStats = () => {
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
