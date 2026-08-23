import { classes } from '@mono/shared/utils';
import type { Surface } from '@mono/shared/types';

import styles from './styles.module.css';

interface Props {
  value: string;
  placeholder?: string;
  surface?: Surface;
  setValue: (value: string) => void;
  className?: string;
}

export const InputText = (props: Props) => {
  const { value, setValue, placeholder, surface = 1, className } = props;

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(event) => setValue(event.target.value)}
      className={classes(className, `surface-${surface}`, styles.container)}
    />
  );
};
