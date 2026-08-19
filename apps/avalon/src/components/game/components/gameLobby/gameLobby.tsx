import { useSessionStore } from 'stores/useSessionStore/useSessionStore.ts';
import { MenuBar } from 'components/menuBar/menuBar.tsx';
import { lobbyCanContinue, lobbyCanReady, lobbyContinue } from 'services/session/logic.ts';

import { GameLobbyProfile } from './components/gameLobbyProfile/gameLobbyProfile.tsx';
import { GameLobbyInfo } from './components/gameLobbyInfo/gameLobbyInfo.tsx';
import styles from './styles.module.scss';

export const GameLobby = () => {
  const { myPlayer, isMyPlayerHost } = useSessionStore();

  return (
    <>
      <GameLobbyInfo className={styles.info} />

      <GameLobbyProfile className={styles.profile} />

      <MenuBar
        showReady={!myPlayer.isReady}
        showContinue={isMyPlayerHost}
        canContinue={lobbyCanContinue}
        onContinue={lobbyContinue}
        canReady={() => lobbyCanReady(myPlayer, myPlayer.name)}
      />
    </>
  );
};
