import { navigate } from 'wouter/use-browser-location';

import { deleteDocument, deleteDocumentField, updateDocument } from '@mono/firebase/firestore';

import { User } from 'types/user';
import { GameSession } from 'types/gameSession';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore';
import { useAppStore } from 'stores/useAppStore/useAppStore';

export const leaveSession = async () => {
  const { showToast } = useAppStore.getState();
  const { myPlayer, step, isMyPlayerHost, sessionId, resetSessionsStore } =
    useSessionStore.getState();

  try {
    const confirmed = confirm(
      'Are you sure you want to leave? This will end the game for everyone!'
    );

    if (!confirmed) return;

    const promises = [
      updateDocument<User>({
        id: myPlayer.id,
        collection: 'users',
        data: {
          sessionId: null,
        },
      }),
    ];

    if (step === 'lobby') {
      promises.push(
        deleteDocumentField<GameSession>({
          id: sessionId,
          collection: 'sessions',
          field: `players.${myPlayer.id}`,
        })
      );
    }

    if (isMyPlayerHost || step !== 'lobby') {
      promises.push(
        deleteDocument({
          id: sessionId,
          collection: 'sessions',
        })
      );
    }

    resetSessionsStore();

    navigate('/');

    await Promise.all(promises);
  } catch (error) {
    const err = error as Error;
    showToast(err.message);
  }
};
