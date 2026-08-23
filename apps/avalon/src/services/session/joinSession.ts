import { getDocument, updateDocument } from '@mono/firebase/firestore.ts';
import type { ApiResponse } from '@mono/shared/types';
import { handleApiResponseError } from '@mono/shared/utils';

import type { GameSession } from 'types/gameSession';
import type { User } from 'types/user';
import { playerDefault } from 'constants/defaults.ts';

import { updateSession } from './updateSession.ts';

interface Props {
  sessionId: string;
  user: User;
}

export const joinSession = async ({ sessionId, user }: Props): Promise<ApiResponse<void>> => {
  try {
    const response = await getDocument<GameSession>({
      id: sessionId,
      collection: 'sessions',
    });

    if (!response.ok) throw new Error('Session not found!');

    const tempSession = response.data.document;

    const isUserPartOfSession = tempSession?.players[user.id];

    if (!isUserPartOfSession && tempSession.step !== 'lobby') {
      throw new Error('Game is already in progress');
    }

    if (!isUserPartOfSession && Object.keys(tempSession.players).length >= 10) {
      throw new Error('Lobby is full');
    }

    if (!tempSession.players[user.id]) {
      const defaultName = `Player ${Object.keys(tempSession.players).length + 1}`;

      const joinedSession = await updateSession(
        {
          [`players.${user.id}`]: {
            ...playerDefault(),
            id: user.id,
            name: user.name || defaultName,
            imageUrl: user.imageUrl || '',
            joinedAt: Date.now(),
          },
        },
        sessionId,
      );

      if (!joinedSession) throw new Error('Error joining session');

      await updateDocument<User>({
        collection: 'users',
        id: user.id,
        data: {
          sessionId,
        },
      });
    }

    return {
      ok: true,
      data: undefined,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: 'Failed to join session',
    });
  }
};
