import * as React from 'react';
import { Button, Modal } from '@mono/ui/components';
import { classes } from '@mono/shared/utils';

import { Settings } from 'components/settings/settings.tsx';
import { Stats } from 'components/stats/stats.tsx';

import type { HeaderProps } from './types.ts';
import styles from './styles.module.css';

export const Header = (props: HeaderProps) => {
  const { className } = props;

  const [showSettings, setShowSettings] = React.useState(false);
  const [showStats, setShowStats] = React.useState(false);

  return (
    <>
      <div className={classes(styles.container, className)}>
        <div className={styles.content}>
          <div className={styles.heading}>Alcohol Tracker</div>

          <Button
            icon="ChartBarIcon"
            variant="secondary"
            surface={2}
            onClick={() => setShowStats(true)}
            className={styles.statsButton}
          />

          <Button
            icon="GearSixIcon"
            variant="secondary"
            surface={2}
            onClick={() => setShowSettings(true)}
            className={styles.settingsButton}
          />
        </div>
      </div>

      <Modal heading="Stats" show={showStats} setShow={setShowStats}>
        <Stats />
      </Modal>

      <Settings show={showSettings} setShow={setShowSettings} />
    </>
  );
};
