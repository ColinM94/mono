import { classes } from '@mono/shared/utils.ts';

import { Button } from 'components/button/button.tsx';
import type { Children } from 'types/general';

import styles from './styles.module.scss';

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  label?: string;
  children: Children;
  onClose?: () => void;
  className?: string | undefined;
}

export const Modal = (props: Props) => {
  const { show, setShow, children, label, onClose, className } = props;

  const handleClose = () => {
    setShow(false);
    onClose?.();
  };

  return (
    <>
      <div
        onClick={() => {
          console.log('helllooo');
          setShow(false);
        }}
        className={classes(styles.background, show && styles.backgroundShow)}
      />

      <div className={classes(styles.container, show && styles.containerShow)}>
        <div className={styles.header}>
          <div className={styles.headerLabel}>{label}</div>

          <Button
            type="secondary"
            icon="Close"
            onClick={handleClose}
            layer={1}
            className={styles.headerButton}
          />
        </div>

        <div className={classes(styles.content, className)}>{children}</div>
      </div>
    </>
  );
};
