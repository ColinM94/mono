import { Button, FormField, InputNumber, Modal } from '@mono/ui/components';
import { classes } from '@mono/shared/utils';

import { useAppStore } from 'stores/useAppStore/useAppStore.ts';

import type { Props } from './types.ts';
import styles from './styles.module.css';

export const Settings = (props: Props) => {
  const { show, setShow, className } = props;

  const { weightKg, gender, maxBloodAlcoholPerMille } = useAppStore();

  return (
    <Modal
      heading="Settings"
      show={show}
      setShow={setShow}
      contentClassName={styles.content}
      className={classes(className, styles.container)}
    >
      <InputNumber
        label="Weight (kg)"
        value={weightKg}
        setValue={(weightKg) => useAppStore.setState({ weightKg })}
        surface={2}
      />

      <FormField label="Gender">
        <div className={styles.genders}>
          <Button
            icon="GenderMaleIcon"
            onClick={() => useAppStore.setState({ gender: 'male' })}
            variant={gender === 'male' ? 'primary' : 'secondary'}
            size="large"
          />
          <Button
            icon="GenderFemaleIcon"
            onClick={() => useAppStore.setState({ gender: 'female' })}
            variant={gender === 'female' ? 'primary' : 'secondary'}
            size="large"
          />
        </div>
      </FormField>

      <InputNumber
        label="Max Blood Alcohol per Mille (0.2 > 2.0)"
        value={maxBloodAlcoholPerMille}
        setValue={(maxBloodAlcoholPerMille) => useAppStore.setState({ maxBloodAlcoholPerMille })}
        surface={2}
        max={2}
        min={0.2}
      />
    </Modal>
  );
};
