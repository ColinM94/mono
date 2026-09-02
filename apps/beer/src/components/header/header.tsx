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
        <div className={styles.content}>
          <h3>Beer Tracker</h3>

          <Button
            icon="GearSixIcon"
            variant="secondary"
            surface={1}
            onClick={() => setShowSettings(true)}
            className={styles.settingsButton}
          />
        </div>
      </div>

      <Settings show={showSettings} setShow={setShowSettings} />
    </>
  );
};
