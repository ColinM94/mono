import { classes } from '@mono/shared/utils.ts';

import styles from './styles.module.css';

interface Props {
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

export const InputText = (props: Props) => {
  const { value, setValue, className } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className={classes(className, styles.container)}
    />
  );
};
