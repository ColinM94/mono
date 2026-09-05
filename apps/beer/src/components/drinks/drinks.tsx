import * as React from 'react';
import { formatTime } from '@mono/shared/utils';
import { Button, Card, Icon } from '@mono/ui/components';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import { calculateStats } from 'components/utils/stats.ts';
import { DrinkTemplateEditor } from 'components/drinkTemplateEditor/drinkTemplateEditor.tsx';
import type { Drink, DrinkTemplate } from 'types/general.ts';

import styles from './styles.module.css';
import type { Props } from './types.ts';

export const Drinks = (props: Props) => {
  const { type, className } = props;

  const { drinks, drinkTemplates } = useAppStore();

  const [showEditor, setShowEditor] = React.useState(false);
  const [selectedTemplate, setSelectedTemplate] = React.useState<DrinkTemplate>();

  const handleDelete = (index: number) => {
    const updatedDrinks = drinks.toSpliced(index, 1);
    useAppStore.setState({ [type]: updatedDrinks });
    if (type === 'drinks') calculateStats();
  };

  const handleAdd = (drink: DrinkTemplate) => {
    useAppStore.setState({
      drinks: [...drinks, { ...drink, time: Date.now() }],
    });
    calculateStats();
  };

  const items = () => {
    let data = type === 'drinks' ? drinks : drinkTemplates;

    if (type === 'drinks') {
      (data as Drink[]).sort((a, b) => b.time - a.time);
    }

    return data.map((drink, index) => {
      return (
        <div className={styles.row} key={index}>
          {type === 'drinks' && (
            <div className={styles.time}>{formatTime((drink as Drink).time)}</div>
          )}
          <Icon name={drink.icon} />
          <div className={styles.name}>{drink.name}</div>
          <div>{drink.ml}ml</div>
          <div className={styles.percentage}>{drink.abv}%</div>

          {type === 'drinks' && (
            <Button
              variant="secondary"
              onClick={() => handleDelete(index)}
              icon="XIcon"
              surface={2}
            />
          )}

          {type === 'drinkTemplates' && (
            <Button
              variant="secondary"
              onClick={() => {
                setSelectedTemplate(drink);
                setShowEditor(true);
              }}
              icon="PencilIcon"
              surface={2}
            />
          )}

          {type === 'drinkTemplates' && (
            <Button
              variant="secondary"
              onClick={() => handleAdd(drink)}
              icon="PlusIcon"
              surface={2}
            />
          )}
        </div>
      );
    });
  };

  return (
    <>
      <Card
        header={{
          heading: type === 'drinks' ? 'Drinks Consumed' : 'Drink Shelf',
          buttons: [
            {
              icon: 'PlusIcon',
              variant: 'secondary',
              onClick: () => setShowEditor(true),
              hidden: type === 'drinks',
            },
          ],
        }}

        surface={1}
        contentClassName={styles.content}
        className={className}
      >
        {items()}

        {type === 'drinks' && drinks.length === 0 && (
          <div className={styles.noDrinksMessage}>You haven't drank anything yet</div>
        )}

        {type === 'drinkTemplates' && drinkTemplates.length === 0 && (
          <div className={styles.noDrinksMessage}>You haven't added a drink to your shelf yet</div>
        )}
      </Card>

      <DrinkTemplateEditor
        show={showEditor}
        setShow={setShowEditor}
        existingTemplate={selectedTemplate}
        setExistingTemplate={setSelectedTemplate}
      />
    </>
  );
};
