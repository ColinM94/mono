import * as React from 'react';
import { classes } from '@mono/shared/utils';
import { Button } from '@mono/ui/components';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import type { Drink, DrinkTemplate } from 'types/general.ts';

import { DrinkTemplateEditor } from './components/drinkTemplateEditor/drinkTemplateEditor.tsx';
import { DrinkTemplateButton } from './components/drinkTemplateButton/drinkTemplateButton.tsx';
import styles from './styles.module.css';
import type { Props } from './types.ts';

export const DrinkTemplates = (props: Props) => {
  const { className } = props;

  const { drinks, drinkTemplates } = useAppStore();

  const [showEditor, setShowEditor] = React.useState(false);
  const [selectedDrink, setSelectedDrink] = React.useState<Drink>();

  const handleAddDrink = (drink: DrinkTemplate) => {
    useAppStore.setState({
      drinks: [...drinks, { ...drink, time: Date.now() }],
    });
  };

  return (
    <>
      <div className={classes(styles.container, className)}>
        <div className={styles.header}>
          <h3>Templates</h3>

          <Button
            icon="PlusIcon"
            variant="secondary"
            onClick={() => setShowEditor(true)}
            className={styles.addButton}
          />
        </div>

        <div className={styles.drinkButtons}>
          {drinkTemplates.map((drink) => (
            <DrinkTemplateButton
              drink={drink}
              onClick={(drink) => handleAddDrink(drink)}
              onEditClick={(drink) => {
                setSelectedDrink(drink);
                setShowEditor(true);
              }}
              key={drink.id}
              className={styles.drinkButton}
            />
          ))}
        </div>
      </div>

      <DrinkTemplateEditor
        show={showEditor}
        setShow={setShowEditor}
        existingDrink={selectedDrink}
      />
    </>
  );
};
