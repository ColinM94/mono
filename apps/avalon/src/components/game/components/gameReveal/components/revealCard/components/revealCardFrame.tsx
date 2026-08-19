import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { classes } from '@mono/shared/utils.ts';

import styles from './styles.module.scss';
import React from 'react';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className: string | undefined;
}

export const RevealCardFrame = (props: Props) => {
  const { children, className } = props;

  return (
    <div className={classes(styles.container, className)}>
      <FontAwesomeIcon icon="star" className={styles.glyphTopLeft} />
      <FontAwesomeIcon icon="star" className={styles.glyphTopRight} />
      <FontAwesomeIcon icon="star" className={styles.glyphBottomRight} />
      <FontAwesomeIcon icon="star" className={styles.glyphBottomLeft} />

      {children}
    </div>
  );
};
