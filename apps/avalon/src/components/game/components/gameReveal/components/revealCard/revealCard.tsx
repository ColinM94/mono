import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

import { characters } from 'constants/characters';
import { useSessionStore } from 'stores/useSessionStore/useSessionStore';
import { classes } from 'utils/classes';

import styles from './styles.module.scss';
import { RevealCardFrame } from './components/revealCardFrame';

export const RevealCard = () => {
  const { myPlayer } = useSessionStore();
  const [isFlipped, setIsFlipped] = React.useState(false);

  const character = characters[myPlayer.characterId];

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const [image, setImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!character) return;

    const loadImage = async () => {
      const tempImage = await import(`assets/images/characters/${character.id}.webp`);

      setImage(tempImage.default);
    };

    void loadImage();
  }, [character?.id]);

  if (!character) return;

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={classes(styles.card, isFlipped && styles.cardFlipped)}>
        <div className={styles.cardFront}>
          <RevealCardFrame className={styles.frame}>
            <div className={styles.nameContainer}>
              <div className={styles.frontName}>{character.name}</div>
              <div className={styles.imageContainer}>
                {image && <img loading="lazy" src={image} className={styles.image} />}
              </div>
            </div>
            <div className={styles.frontDescription}>{character.howToPlay}</div>
          </RevealCardFrame>
        </div>

        <div className={styles.cardBack}>
          <RevealCardFrame className={styles.frame}>
            <FontAwesomeIcon icon={faRotate} className={styles.centerIcon} />
          </RevealCardFrame>
        </div>
      </div>
    </div>
  );
};
