import * as React from 'react';
import { Button, Icon, InputText, Modal, type IconName } from '@mono/ui/components';
import { classes, mergeReducer } from '@mono/shared/utils';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import type { Drink } from 'types/general.ts';
import { defaultDrink } from 'constants/defaults.ts';

import type { Props } from './types.ts';
import styles from './styles.module.css';
import { FormField } from '../../../../../../../packages/ui/src/components/formField/formField.tsx';

export const DrinkTemplateEditor = (props: Props) => {
  const { show, setShow, existingDrink, className } = props;

  const { drinks } = useAppStore();

  const [drink, updateDrink] = React.useReducer(mergeReducer<Drink>, defaultDrink());

  const icons: IconName[] = ['BeerBottleIcon', 'BeerSteinIcon', 'ChampagneIcon', 'WineIcon'];

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

      <FormField label="Icon" inputClassName={styles.iconInput}>
        {icons.map((icon) => (
          <Button
            key={icon}
            icon={icon}
            variant="secondary"
            surface={drink.icon === icon ? 2 : 1}
            onClick={() => updateDrink({ icon })}
            className={classes(styles.icon)}
          />
        ))}
      </FormField>

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

      <Button
        label={existingDrink ? 'Update Template' : 'Create Template'}
        onClick={saveDrink}
        className={styles.saveButton}
      />
    </Modal>
  );
};
