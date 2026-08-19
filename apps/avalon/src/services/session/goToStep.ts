import { updatePlayer } from 'services/session/updatePlayer.ts';
import { updateSession } from 'services/session/updateSession.ts';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.ts';
import type { GameSession, Player } from 'types/gameSession';

interface Props {
  step: GameSession['step'];
  playerUpdates?: Record<string, Partial<Player>>;
}

export const goToStep = async ({ step, playerUpdates }: Props) => {
  const { playersArray } = useSessionStore.getState();

  const promises: Promise<void>[] = [];

  playersArray.forEach((player) => {
    const update: Partial<Player> = {
      ...(playerUpdates && { ...playerUpdates[player.id] }),
      isReady: false,
    };

    promises.push(updatePlayer(player.id, update));
  });

  await Promise.all(promises);

  void updateSession({
    step,
  });
};
