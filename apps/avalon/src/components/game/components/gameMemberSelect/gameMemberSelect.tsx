import { Divider } from 'components/divider/divider.tsx';
import { LoadingOverlay } from 'components/loadingOverlay/loadingOverlay.tsx';
import { MenuBar } from 'components/menuBar/menuBar.tsx';
import { PlayerCard } from 'components/playerCard/playerCard.tsx';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';
import { classes } from '@mono/shared/utils.ts';
import { selectQuestMember } from 'services/session/selectQuestMember.ts';
import { memberSelectCanContinue, memberSelectContinue } from 'services/session/logic.ts';

import type { Props } from './types';
import styles from './styles.module.scss';

export const GameMemberSelect = (props: Props) => {
  const { className } = props;

  const { players, playersArray, myPlayer, activeQuest, isMyPlayerLeader } = useSessionStore();

  const handleClick = (playerId: string) => {
    if (activeQuest.leaderId !== myPlayer.id || myPlayer.isReady) return;

    selectQuestMember(playerId);
  };

  if (!activeQuest.leaderId) return <LoadingOverlay />;

  return (
    <>
      <Divider
        description={
          isMyPlayerLeader
            ? `Select ${activeQuest.numPlayers} people to go on the this quest`
            : `${players[activeQuest.leaderId]?.name} is selecting ${
                activeQuest.numPlayers
              } players to go on this Quest`
        }
      />

      <div className={classes(styles.container, className)}>
        {isMyPlayerLeader &&
          playersArray.map((player) => {
            const isSelected = activeQuest.players.includes(player.id);

            return (
              <PlayerCard
                player={player}
                onClick={() => handleClick(player.id)}
                showName
                key={player.id}
                className={classes(
                  styles.player,
                  isSelected ? styles.playerSelected : styles.playerDisabled
                )}
              />
            );
          })}
      </div>

      <MenuBar
        canContinue={memberSelectCanContinue}
        onContinue={memberSelectContinue}
        showContinue={isMyPlayerLeader}
        showReady={false}
      />
    </>
  );
};
