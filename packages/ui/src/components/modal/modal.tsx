import type { Children } from '@mono/shared/types';
import { classes } from '@mono/shared/utils';

import { Button } from '../button/button.tsx';
import styles from './style.module.css';
import { Card } from '../card/card.tsx';

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

      <Card
        header={{
          heading,
          buttons: [
            {
              icon: 'XIcon',
              variant: 'secondary',
              surface: 2,
              onClick: handleClose,
              className: styles.closeButton,
            },
          ],
        }}
        contentClassName={classes(styles.content, contentClassName)}
        className={classes(styles.container, className)}
      >
        {children}
      </Card>
    </>
  );
};
