import { updatePlayer } from 'services/session/updatePlayer.ts';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.ts';
import type { Player } from 'types/gameSession';

export const updateMyPlayer = async (update: Partial<Player>) => {
  const myPlayer = useSessionStore.getState().myPlayer;

  await updatePlayer(myPlayer.id, update);
};
