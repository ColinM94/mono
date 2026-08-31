import type { Children } from '@mono/shared/types';
import { classes } from '@mono/shared/utils';

import { Button } from '../button/button.tsx';
import styles from './style.module.css';

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  onClose?: () => void;
  heading?: string;
  children: Children;
  className?: string;
  contentClassName?: string;
}

export const Modal = (props: Props) => {
  const { show, setShow, onClose, heading, children, className, contentClassName } = props;

  if (!show) return null;

  const handleClose = () => {
    onClose?.();
    setShow(false);
  };

  return (
    <>
      {show && <div onClick={handleClose} className={styles.background} />}

      <div className={classes(styles.container, className)}>
        <div className={styles.header}>
          <div className={styles.heading}>{heading}</div>

          <Button
            icon="XIcon"
            variant="secondary"
            surface={2}
            onClick={handleClose}
            className={styles.closeButton}
          />
        </div>

        <div className={classes(styles.content, contentClassName)}>{children}</div>
      </div>
    </>
  );
};
