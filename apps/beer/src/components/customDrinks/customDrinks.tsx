import * as React from 'react';
import { classes, generateUniqueId } from '@mono/shared/utils';
import { Button, InputText, Modal } from '@mono/ui/components';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import type { Drink } from 'types/general.ts';

import { calculateStats } from 'components/utils/stats.ts';

import { CustomDrinkButton } from './components/customDrinkButton/customDrinkButton.tsx';
import styles from './styles.module.css';
import type { Props } from './types.ts';

export const CustomDrinks = (props: Props) => {
  const { className } = props;

  const { drinks, customDrinks } = useAppStore();

  const [customMl, setCustomMl] = React.useState(0);
  const [customAbv, setCustomAbv] = React.useState(0);
  const [customName, setCustomName] = React.useState('Beer');
  const [showEditor, setShowEditor] = React.useState(false);

  const addCustomDrink = (newDrink: Pick<Drink, 'name' | 'ml' | 'abv'>) => {
    const gramsOfAlcohol = newDrink.ml * (newDrink.abv / 100) * 0.789;

    const updatedDrinks: Drink[] = [
      ...drinks,
      {
        time: 0,
        abv: newDrink.abv,
        gramsOfAlcohol,
        ml: newDrink.ml,
        name: newDrink.name || 'Beer',
        id: generateUniqueId(),
        icon: 'BeerBottleIcon',
      },
    ];

    useAppStore.setState({
      customDrinks: updatedDrinks,
    });
  };

  return (
    <>
      <div className={classes(styles.container, className)}>
        <div className={styles.header}>
          <h3>Custom Drinks</h3>

          <Button
            icon="PlusIcon"
            variant="secondary"
            onClick={() => setShowEditor(true)}
            className={styles.addButton}
          />
        </div>

        <div className={styles.drinkButtons}>
          {customDrinks.map((drink) => (
            <CustomDrinkButton
              drink={drink}
              onClick={(drink) => addCustomDrink(drink)}
              key={drink.id}
              className={styles.drinkButton}
            />
          ))}
        </div>
      </div>

      <Modal
        heading="Custom Drink"
        show={showEditor}
        setShow={setShowEditor}
        className={styles.modal}
      >
        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>Name</div>

          <InputText
            value={customName}
            setValue={(value) => setCustomName(value)}
            surface={2}
            className={styles.input}
          />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>ML</div>

          <InputText
            value={String(customMl)}
            setValue={(value) => setCustomMl(Number(value))}
            surface={2}
            className={styles.input}
          />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>Abv</div>

          <InputText
            value={String(customAbv)}
            setValue={(value) => setCustomAbv(Number(value))}
            surface={2}
            className={styles.input}
          />
        </div>

        <Button
          label="Add Custom Drink"
          onClick={() => {
            addCustomDrink({
              abv: customAbv,
              ml: customMl,
              name: customName,
            });

            setCustomAbv(0);
            setCustomMl(0);
            setCustomName('Beer');
          }}
          className={styles.addButton}
        />
      </Modal>
    </>
  );
};
