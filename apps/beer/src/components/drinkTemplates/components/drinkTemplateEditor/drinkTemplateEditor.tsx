import * as React from 'react';
import {
  Button,
  FormField,
  InputNumber,
  InputText,
  Modal,
  type IconName,
} from '@mono/ui/components';
import { classes, mergeReducer } from '@mono/shared/utils';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import type { DrinkTemplate } from 'types/general.ts';
import { defaultDrink, defaultDrinkTemplate } from 'constants/defaults.ts';

import type { Props } from './types.ts';
import styles from './styles.module.css';

export const DrinkTemplateEditor = (props: Props) => {
  const { show, setShow, existingTemplate, setExistingTemplate, className } = props;

  const { drinkTemplates } = useAppStore();

  const [state, updateState] = React.useReducer(
    mergeReducer<DrinkTemplate>,
    defaultDrinkTemplate(),
  );

  const icons: IconName[] = ['BeerBottleIcon', 'BeerSteinIcon', 'ChampagneIcon', 'WineIcon'];

  React.useEffect(() => {
    updateState(existingTemplate || defaultDrink());
  }, [show]);

  const handleSave = () => {
    const gramsOfAlcohol = state.ml * (state.abv / 100) * 0.789;

    const template = { ...state, gramsOfAlcohol };

    let updatedTemplates: DrinkTemplate[] = [];

    if (existingTemplate) {
      updatedTemplates = [...drinkTemplates];
      const index = updatedTemplates.findIndex((template) => template.id === existingTemplate.id);
      updatedTemplates[index] = template;
    } else {
      updatedTemplates = [...drinkTemplates, template];
    }

    useAppStore.setState({
      drinkTemplates: updatedTemplates,
    });

    updateState(defaultDrinkTemplate());
    setShow(false);
  };

  const handleDelete = () => {
    if (!existingTemplate) return;

    let updatedTemplates: DrinkTemplate[] = [...drinkTemplates];

    const index = drinkTemplates.findIndex((template) => template.id === existingTemplate.id);

    useAppStore.setState({
      drinkTemplates: updatedTemplates.toSpliced(index, 1),
    });
  };

  return (
    <Modal
      heading="Custom Drink"
      show={show}
      setShow={setShow}
      onClose={() => setExistingTemplate(undefined)}
      contentClassName={styles.container}
    >
      <InputText
        label="Name"
        value={state.name}
        setValue={(name) => updateState({ name })}
        surface={2}
      />

      <FormField label="Icon" inputClassName={styles.iconInput}>
        {icons.map((icon) => (
          <Button
            key={icon}
            icon={icon}
            variant="secondary"
            surface={state.icon === icon ? 2 : 1}
            onClick={() => updateState({ icon })}
            className={classes(styles.icon)}
          />
        ))}
      </FormField>

      <InputText
        label="ML"
        value={String(state.ml)}
        setValue={(ml) => updateState({ ml: Number(ml) })}
        surface={2}
      />

      <InputNumber
        label="Abv"
        value={state.abv}
        setValue={(abv) => updateState({ abv })}
        surface={2}
      />

      <div className={styles.buttons}>
        {existingTemplate && (
          <Button
            label="Delete Template"
            variant="danger"
            onClick={handleDelete}
            className={styles.deleteButton}
          />
        )}

        <Button
          label={existingTemplate ? 'Update Template' : 'Create Template'}
          onClick={handleSave}
          className={styles.saveButton}
        />
      </div>
    </Modal>
  );
};
