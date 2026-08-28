import { Icon, InputText, Modal } from '@mono/ui/components';

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
      <div className={styles.item}>
        <div>Weight (kg)</div>
        <InputText
          value={String(weightKg)}
          setValue={(weightKg) => useAppStore.setState({ weightKg: Number(weightKg) })}
          surface={2}
        />
      </div>

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

      <div className={styles.item}>
        <div>Max Blood Alcohol per Mille {'(0.5 > 2.0)'}</div>
        <InputText
          value={String(maxBloodAlcoholPerMille)}
          setValue={(maxBloodAlcoholPerMille) =>
            useAppStore.setState({ maxBloodAlcoholPerMille: Number(maxBloodAlcoholPerMille) })
          }
          surface={2}
        />
      </div>
    </Modal>
  );
};
