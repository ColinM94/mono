import { Modal } from 'components/modal/modal.tsx';
import { Heading } from 'components/heading/heading.tsx';
import { CharacterCard } from 'components/characterCard/characterCard.tsx';
import { characters } from 'constants/characters.ts';

import type { Props } from './types';
import styles from './styles.module.scss';

export const CharacterModal = (props: Props) => {
  const { characterId, show, setShow, headingTitle, headingSubtitle } = props;

  const character = characters[characterId];

  return (
    <Modal show={show} setShow={setShow}>
      {headingTitle && <Heading headingTitle={headingTitle} headingSubtitle={headingSubtitle} />}

      {character && (
        <CharacterCard
          character={character}
          showDescription
          showName
          orientation="landscape"
          className={styles.character}
        />
      )}
    </Modal>
  );
};
