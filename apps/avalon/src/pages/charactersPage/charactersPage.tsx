import { MainLayout } from 'layouts/mainLayout/mainLayout.tsx';
import { CharacterCard } from 'components/characterCard/characterCard.tsx';
import { characters as charactersRecord } from 'constants/characters.tsx';

import styles from './styles.module.scss';

export const CharactersPage = () => {
  const characters = Object.values(charactersRecord);

  return (
    <MainLayout showHeader showBackButton heading="Characters" className={styles.container}>
      {characters.map((character) => (
        <CharacterCard
          character={character}
          showName
          orientation="landscape"
          showDescription
          disableAnimation
          key={character.id}
          className={styles.character}
        />
      ))}
    </MainLayout>
  );
};
