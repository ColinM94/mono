import { classes } from '@mono/shared/utils';

import { Debug } from 'components/debug/debug.tsx';
import { MenuBarReadyButton } from 'components/menuBar/components/menuBarReadyButton/menuBarReadyButton.tsx';
import { MenuBarMenuButton } from 'components/menuBar/components/menuBarMenuButton/menuBarMenuButton.tsx';
import { isDev } from 'constants/general.ts';

import styles from './styles.module.scss';
import type { Props } from './types';

export const MenuBar = (props: Props) => {
  const { showContinue, showReady, canContinue, canReady, onContinue, onReady, className } = props;

  return (
    <div className={classes(styles.container, className)}>
      <MenuBarMenuButton />

      <MenuBarReadyButton
        canContinue={canContinue}
        canReady={canReady}
        onContinue={onContinue}
        onReady={onReady}
        showContinue={showContinue}
        showReady={showReady}
      />

      {isDev && <Debug />}

      {!isDev && <div className={styles.rightSpace} />}
    </div>
  );
};
