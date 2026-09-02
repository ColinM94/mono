import { classes } from '@mono/shared/utils';

import styles from './styles.module.css';
import { FormField } from '../formField/formField.tsx';
import type { InputNumberProps } from './types.ts';

export const InputNumber = (props: InputNumberProps) => {
  const { value, setValue, label, placeholder, surface = 1, min, max, className } = props;

  return (
    <FormField label={label}>
      <input
        type="number"
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(event) => {
          const value = event.target.value;
          setValue(value ? Number(value) : undefined);
        }}
        max={max}
        min={min}
        className={classes(`surface-${surface}`, styles.input, className)}
      />
    </FormField>
  );
};
