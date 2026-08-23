import * as React from 'react';

import { classes } from '@mono/shared/utils';
import type { CharacterId } from 'types/general';
import backgroundImage1 from 'assets/images/mainMenu/buttonBackground1.webp';
import backgroundImage2 from 'assets/images/mainMenu/buttonBackground2.webp';
import backgroundImage3 from 'assets/images/mainMenu/buttonBackground3.webp';
import backgroundImage4 from 'assets/images/mainMenu/buttonBackground4.webp';

import type { Props } from './types';
import styles from './styles.module.scss';

const backgroundImages: Record<number, string> = {
  1: backgroundImage1,
  2: backgroundImage2,
  3: backgroundImage3,
  4: backgroundImage4,
};

const characterImageNames = [
  'cleric',
  'percival',
  'merlin',
  'assassin',
  'morgana',
  'oberon',
] as Partial<CharacterId>[];

export const MainMenuButton = (props: Props) => {
  const { label, className, onClick, position } = props;

  const [characterImages, setCharacterImages] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (position !== 4) return;

    (async () => {
      const promises = characterImageNames.map(async (name) => {
        const image = await import(`assets/images/characters/${name}.webp`);
        return [name, image.default];
      });

      const images = await Promise.all(promises);
      setCharacterImages(Object.fromEntries(images));
    })();
  }, [position]);

  return (
    <div onClick={onClick} className={classes(styles.container, className)}>
      <img src={backgroundImages[position]} className={styles.backgroundImage} />

      <div className={styles.label}>{label}</div>

      {position === 4 && (
        <div className={styles.characters}>
          {characterImages.cleric && (
            <img src={characterImages.cleric} loading="lazy" className={styles.clericImage} />
          )}

          {characterImages.percival && (
            <img src={characterImages.percival} loading="lazy" className={styles.percivalImage} />
          )}

          {characterImages.merlin && (
            <img src={characterImages.merlin} loading="lazy" className={styles.merlinImage} />
          )}

          {characterImages.assassin && (
            <img src={characterImages.assassin} loading="lazy" className={styles.assassinImage} />
          )}

          {characterImages.morgana && (
            <img src={characterImages.morgana} loading="lazy" className={styles.morganaImage} />
          )}

          {characterImages.oberon && (
            <img src={characterImages.oberon} loading="lazy" className={styles.oberonImage} />
          )}
        </div>
      )}
    </div>
  );
};
