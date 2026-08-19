import { updateDocument } from '@mono/firebase/firestore.ts';

import { useAppStore } from 'stores/useAppStore/useAppStore.tsx';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';
import type { Player, GameSession } from 'types/gameSession';
import type { User } from 'types/user';

export const updatePlayer = async (userId: string, update: Partial<Player>) => {
  const { sessionId, players } = useSessionStore.getState();
  const { showToast } = useAppStore.getState();

  try {
    await updateDocument<GameSession>({
      id: sessionId,
      collection: 'sessions',
      data: {
        [`players.${userId}`]: {
          ...players[userId],
          ...update,
        },
      },
    });

    if (update.name) {
      await updateDocument<User>({
        id: userId,
        collection: 'users',
        data: {
          name: update.name,
        },
      });
    }
  } catch (error) {
    const err = error as Error;
    showToast(err.message, 'error');
  }
};
