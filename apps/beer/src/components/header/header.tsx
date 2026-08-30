import * as React from 'react';
import { Button } from '@mono/ui/components';
import { classes } from '@mono/shared/utils';

import { Settings } from 'components/settings/settings.tsx';

import type { HeaderProps } from './types.ts';
import styles from './styles.module.css';

export const Header = (props: HeaderProps) => {
  const { className } = props;

  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <>
      <div className={classes(styles.container, className)}>
        <h2>Beer Tracker</h2>

        <Button
          icon="GearSixIcon"
          variant="secondary"
          surface={2}
          onClick={() => setShowSettings(true)}
          className={styles.settingsButton}
        />
      </div>

      <Settings show={showSettings} setShow={setShowSettings} />
    </>
  );
};
