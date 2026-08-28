import type { Children } from '@mono/shared/types';
import { classes } from '@mono/shared/utils';

import styles from './style.module.css';
import { Button } from '../button/button.tsx';

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  heading?: string;
  children: Children;
  className?: string;
}

export const Modal = (props: Props) => {
  const { show, setShow, heading, children, className } = props;

  if (!show) return null;

  return (
    <div className={classes(styles.container, className)}>
      <div className={styles.header}>
        <div className={styles.heading}>{heading}</div>
        <Button
          icon="XIcon"
          variant="secondary"
          surface={1}
          onClick={() => setShow(false)}
          className={styles.closeButton}
        />
      </div>

      {children}
    </div>
  );
};
