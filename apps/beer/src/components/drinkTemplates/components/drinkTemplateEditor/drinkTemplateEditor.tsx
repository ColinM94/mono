import * as React from 'react';
import { Button, InputText, Modal } from '@mono/ui/components';
import { mergeReducer } from '@mono/shared/utils';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import type { Drink } from 'types/general.ts';
import { defaultDrink } from 'constants/defaults.ts';

import type { Props } from './types.ts';
import styles from './styles.module.css';

export const DrinkTemplateEditor = (props: Props) => {
  const { show, setShow, existingDrink, className } = props;

  const { drinks } = useAppStore();

  const [drink, updateDrink] = React.useReducer(mergeReducer<Drink>, defaultDrink());

  React.useEffect(() => {
    updateDrink(existingDrink || defaultDrink());
  }, [show]);

  const saveDrink = () => {
    const gramsOfAlcohol = drink.ml * (drink.abv / 100) * 0.789;

    const updatedDrinks: Drink[] = [
      ...drinks,
      {
        ...drink,
        gramsOfAlcohol,
      },
    ];

    useAppStore.setState({
      drinkTemplates: updatedDrinks,
    });

    setShow(false);
  };

  return (
    <Modal heading="Custom Drink" show={show} setShow={setShow} contentClassName={styles.container}>
      <InputText
        label="Name"
        value={drink.name}
        setValue={(name) => updateDrink({ name })}
        surface={2}
      />

      <InputText
        label="ML"
        value={String(drink.ml)}
        setValue={(ml) => updateDrink({ ml: Number(ml) })}
        surface={2}
      />

      <InputText
        label="Abv"
        value={String(drink.abv)}
        setValue={(abv) => updateDrink({ abv: Number(abv) })}
        surface={2}
      />

      <Button label="Add Custom Drink" onClick={saveDrink} className={styles.addButton} />
    </Modal>
  );
};
