import { classes } from '@mono/shared/utils.ts';
import { Button } from 'components/button/button.tsx';
import { useAppStore } from 'stores/useAppStore/useAppStore.ts';

import type { Props } from './types';
import styles from './styles.module.scss';

export const ReadyButton = (props: Props) => {
  const { canReady, onReady, className } = props;

  const { showToast } = useAppStore();

  return (
    <Button
      icon="check"
      disabled={canReady !== true}
      onClickDisabled={() => {
        const response = canReady;

        if (typeof response === 'string') {
          showToast(response);
        }
      }}
      onClick={onReady}
      className={classes(styles.container, className)}
    />
  );
};
