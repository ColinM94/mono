import { Icon, InputNumber, InputText, Modal } from '@mono/ui/components';

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
      className={classes(className, styles.container)}
    >
      <InputText
        label="Weight (kg)"
        value={String(weightKg)}
        setValue={(weightKg) => useAppStore.setState({ weightKg: Number(weightKg) })}
        surface={2}
      />

      <div className={styles.item}>
        <div>Gender</div>
        <div className={styles.genders}>
          <div
            title="Male"
            onClick={() => useAppStore.setState({ gender: 'male' })}
            className={classes(styles.gender, gender === 'male' && styles.genderSelected)}
          >
            <Icon name="GenderMaleIcon" />
          </div>

          <div
            title="Female"
            onClick={() => useAppStore.setState({ gender: 'female' })}
            className={classes(styles.gender, gender === 'female' && styles.genderSelected)}
          >
            <Icon name="GenderFemaleIcon" />
          </div>
        </div>
      </div>

      <InputNumber
        label="Max Blood Alcohol per Mille (0.5 > 2.0)"
        value={maxBloodAlcoholPerMille}
        setValue={(maxBloodAlcoholPerMille) => useAppStore.setState({ maxBloodAlcoholPerMille })}
        surface={2}
        max={2}
        min={0.2}
      />
    </Modal>
  );
};
