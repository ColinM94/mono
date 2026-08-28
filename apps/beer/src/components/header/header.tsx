import * as React from 'react';
import { useLocation } from 'wouter';
import { Icon } from '@mono/ui/components';
import { classes } from '@mono/shared/utils';

import { Settings } from 'components/settings/settings.tsx';

import type { HeaderProps } from './types.ts';
import styles from './styles.module.css';

export const Header = (props: HeaderProps) => {
  const { className } = props;

  const [, navigate] = useLocation();

  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <>
      <div className={classes(styles.container, className)}>
        <Icon
          name="GearSixIcon"
          onClick={() => setShowSettings(true)}
          className={styles.settingsButton}
        />
      </div>

      <Settings show={showSettings} setShow={setShowSettings} />
    </>
  );
};
