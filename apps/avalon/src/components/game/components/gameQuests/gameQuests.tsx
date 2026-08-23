import { classes } from '@mono/shared/utils';

import { LoadingOverlay } from 'components/loadingOverlay/loadingOverlay.tsx';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';

import { QuestsStatus } from './components/questsStatus/questsStatus.tsx';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export const GameQuests = (props: Props) => {
  const { className } = props;
  const { activeQuest } = useSessionStore();

  if (!activeQuest) return <LoadingOverlay />;

  return (
    <div className={classes(styles.container, className)}>
      <QuestsStatus className={styles.questsStatus} />
    </div>
  );
};
