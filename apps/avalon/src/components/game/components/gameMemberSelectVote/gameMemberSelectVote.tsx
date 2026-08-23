import { classes } from '@mono/shared/utils';

import { Divider } from 'components/divider/divider.tsx';
import { MenuBar } from 'components/menuBar/menuBar.tsx';
import { Players } from 'components/players/players.tsx';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';
import { voteToApproveMember } from 'services/session/voteToApproveMember.ts';
import {
  memberSelectVoteCanContinue,
  memberSelectVoteCanReady,
  memberSelectVoteContinue,
} from 'services/session/logic.ts';

import type { Props } from './types';
import styles from './styles.module.scss';

export const GameMemberSelectVote = (props: Props) => {
  const { className } = props;

  const { myPlayer, activeQuest, players, activeMemberSelectVotes } = useSessionStore();

  const handleVoteClick = async (voteValue: boolean) => {
    await voteToApproveMember({
      playerId: myPlayer.id,
      voteValue,
    });
  };

  return (
    <>
      <Divider
        description={`${
          players[activeQuest.leaderId].name
        } has chosen these players to go on the quest. Do you approve?`}
      />

      <div className={classes(styles.container, className)}>
        <Players width={2} showOnlyPlayersOnActiveQuest className={styles.players} />

        <div className={styles.votes}>
          <div
            onClick={() => handleVoteClick(true)}
            className={classes(
              styles.yesVote,
              activeMemberSelectVotes?.[myPlayer.id] !== true && styles.voteDisabled,
            )}
          >
            Yes
          </div>

          <div
            onClick={() => handleVoteClick(false)}
            className={classes(
              styles.noVote,
              activeMemberSelectVotes?.[myPlayer.id] !== false && styles.voteDisabled,
            )}
          >
            No
          </div>
        </div>
      </div>

      <MenuBar
        canReady={() => memberSelectVoteCanReady(myPlayer.id)}
        canContinue={memberSelectVoteCanContinue}
        onContinue={memberSelectVoteContinue}
        showContinue={true}
        showReady={false}
      />
    </>
  );
};
