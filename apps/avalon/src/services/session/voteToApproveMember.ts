import { updateDocument } from '@mono/firebase/firestore.ts';

import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';
import type { GameSession } from 'types/gameSession';

interface Props {
  playerId: string;
  voteValue: boolean;
}

export const voteToApproveMember = async ({ playerId, voteValue }: Props) => {
  const { sessionId, activeQuest, activeMemberSelectVoteIndex } = useSessionStore.getState();

  await updateDocument<GameSession>({
    id: sessionId,
    collection: 'sessions',
    data: {
      [`quests.${activeQuest.index}.memberSelectVotes.${activeMemberSelectVoteIndex}.${playerId}`]:
        voteValue,
    },
  });
};
