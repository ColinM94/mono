import * as React from 'react';
import { classes } from '@mono/shared/utils';
import { Button } from '@mono/ui/components';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import type { DrinkTemplate } from 'types/general.ts';

import { DrinkTemplateEditor } from './components/drinkTemplateEditor/drinkTemplateEditor.tsx';
import { DrinkTemplateButton } from './components/drinkTemplateButton/drinkTemplateButton.tsx';
import styles from './styles.module.css';
import type { Props } from './types.ts';

export const DrinkTemplates = (props: Props) => {
  const { className } = props;

  const { drinks, drinkTemplates } = useAppStore();

  const [showEditor, setShowEditor] = React.useState(false);
  const [selectedTemplate, setSelectedTemplate] = React.useState<DrinkTemplate>();

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
          {drinkTemplates.map((drinkTemplate) => (
            <DrinkTemplateButton
              drinkTemplate={drinkTemplate}
              onClick={() => handleAddDrink(drinkTemplate)}
              onEditClick={() => {
                setSelectedTemplate(drinkTemplate);
                setShowEditor(true);
              }}
              key={drinkTemplate.id}
              className={styles.drinkButton}
            />
          ))}
        </div>

        {drinkTemplates.length === 0 && (
          <div className={styles.noDrinksMessage}>You haven't added a template yet</div>
        )}
      </div>

      <DrinkTemplateEditor
        show={showEditor}
        setShow={setShowEditor}
        existingTemplate={selectedTemplate}
        setExistingTemplate={setSelectedTemplate}
      />
    </>
  );
};
