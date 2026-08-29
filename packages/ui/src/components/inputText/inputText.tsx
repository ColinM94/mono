import { classes } from '@mono/shared/utils';

import styles from './styles.module.css';
import { FormField } from '../formField/formField.tsx';
import type { InputTextProps } from './types.ts';

export const InputText = (props: InputTextProps) => {
  const { value, setValue, label, placeholder, surface = 1, className } = props;

  return (
    <FormField label={label}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        className={classes(className, `surface-${surface}`, styles.container)}
      />
    </FormField>
  );
};
