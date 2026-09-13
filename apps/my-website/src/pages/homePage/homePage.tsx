import { classes } from '@mono/shared/utils';

import avalonScreenshot from 'assets/images/avalon.png';
import drunkScreenshot from 'assets/images/drunk.png';

import styles from './styles.module.css';

export const HomePage = () => {
  const item = (
    label: string,
    description: string,
    image: string,
    link: string,
    status: {
      type: 'bad' | 'neutral' | 'good';
      label: string;
    },
  ) => {
    return (
      <a href={link} className={styles.link}>
        <div className={styles.linkImage}>
          <img src={image} className={styles.image} />
        </div>
        <div className={styles.linkInfo}>
          <div className={styles.linkHeading}>{label}</div>
          <div className={styles.linkDescription}>{description}</div>
        </div>
        <div className={classes(styles.status, styles[`status_${status.type}`])}>
          {status.label}
        </div>
      </a>
    );
  };

  return (
    <div className={styles.container}>
      {item(
        'Avalon',
        'An adaption of the boardgame Avalon for web',
        avalonScreenshot,
        'https://avalon.colinmaher.dev',
        {
          label: 'Incomplete',
          type: 'bad',
        },
      )}

      {item(
        'Drunk',
        'Keep track of your blood alcohol level as you drink',
        drunkScreenshot,
        'https://drunk.colinmaher.dev',
        {
          label: 'Unpolished',
          type: 'neutral',
        },
      )}
    </div>
  );
};
