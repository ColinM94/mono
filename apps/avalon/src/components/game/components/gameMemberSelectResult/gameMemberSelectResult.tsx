import * as React from 'react';
import { classes } from '@mono/shared/utils';

import { MenuBar } from 'components/menuBar/menuBar.tsx';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';
import { Divider } from 'components/divider/divider.tsx';
import { memberSelectResultContinue } from 'services/session/logic.ts';

import type { Props } from './types';
import styles from './styles.module.scss';

export const GameMemberSelectResult = (props: Props) => {
  const { className } = props;

  const { isMyPlayerHost, activeMemberSelectVotes } = useSessionStore();

  const votes = Object.values(activeMemberSelectVotes).sort((a, b) => Number(b) - Number(a));

  const hasPassed = Boolean(votes.filter((vote) => vote).length > votes.length / 2);

  const renderVotes = () => {
    const items: React.ReactNode[] = [];

    votes.forEach((vote) => {
      items.push(<div className={vote ? styles.yesVote : styles.noVote}>{vote ? '✔' : '✗'}</div>);
    });

    return items;
  };

  return (
    <>
      <Divider description={hasPassed ? 'The Vote has passed' : 'The Vote has failed'} />

      <div className={classes(styles.container, className)}>{renderVotes()}</div>

      <MenuBar
        showContinue={isMyPlayerHost}
        onContinue={() => memberSelectResultContinue(hasPassed)}
        showReady={false}
      />
    </>
  );
};
