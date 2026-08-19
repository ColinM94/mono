import { MenuBar } from 'components/menuBar/menuBar.tsx';
import * as React from 'react';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore.tsx';
import {
  revealCanContinue,
  revealCanReady,
  revealContinue,
  revealReady,
} from 'services/session/logic.ts';
import { RevealCard } from './components/revealCard/revealCard.tsx';

export const GameReveal = () => {
  const { myPlayer, isMyPlayerHost } = useSessionStore();

  // const [showCharacter, setShowCharacter] = React.useState(false);
  const [isCharacterRevealed] = React.useState(false);

  // console.log(characters, myPlayer.characterId);

  // const characterId = players?.[myPlayer.id]?.characterId;
  // const character = characters[characterId];

  // const allPlayers = Object.values(players);

  // const evilPlayers = Object.values(allPlayers).filter(
  //   (player) => characters[player.characterId].allegiance === "evil" && player.id !== myPlayer.id,
  // );

  // const evilPlayersExceptMordred = evilPlayers.filter((player) => player.id !== "mordred");

  // const merlinAndMorganaPlayers = allPlayers.filter(
  //   (player) => player.characterId === "morgana" || player.characterId === "merlin",
  // );

  // const evilPlayersExceptOberon = evilPlayers.filter((player) => player.characterId !== "oberon");

  // const isMordredPlaying = allPlayers.find((player) => player.characterId === "mordred");
  // const isMorganaPlaying = allPlayers.find((player) => player.characterId === "morgana");
  // const isOberonPlaying = allPlayers.find((player) => player.characterId === "oberon");

  // const characterId: CharacterId = "oberon";

  // const handleReveal = () => {
  //   setIsCharacterRevealed(true);
  //   setShowCharacter(!showCharacter);
  // };

  return (
    <>
      <RevealCard />

      <MenuBar
        showReady
        showContinue={isMyPlayerHost}
        canContinue={() => revealCanContinue(isCharacterRevealed)}
        onContinue={revealContinue}
        canReady={() => revealCanReady(isCharacterRevealed)}
        onReady={() => revealReady(myPlayer.id)}
      />
    </>
  );
};

//       <div className={classes(styles.container, !showCharacter && styles.hidden)}>
//         <div className={styles.characterName}>{characterNames[characterId]}</div>

//         <SetupModule characterId={characterId} selected={true} />

//         {/* <CharacterCard character={characters[]} className={styles.character} /> */}

//         <div className={styles.howToPlay}>{characters[characterId].howToPlay}</div>

// </div>
// {/*
//       <Button
//         label={showCharacter ? "Hide Character" : "Reveal Character"}
//         onClick={handleReveal}
//         className={styles.revealButton}
//       /> */}
