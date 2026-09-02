import type { Children, Surface } from '@mono/shared/types';
import { classes } from '@mono/shared/utils';

import { Button } from '../button/button.tsx';
import type { ButtonProps } from '../button/types.ts';

import styles from './styles.module.css';

interface CardProps {
  surface?: Surface;
  header?: {
    heading: string;
    buttons?: ButtonProps[];
  };
  children: Children;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { header, surface = 1, children, className } = props;

  return (
    <div className={classes(styles.container, `surface-${surface}`, className)}>
      {header && (
        <div className={styles.header}>
          <div className={styles.heading}>{header.heading}</div>

          {header.buttons && (
            <div className={styles.headerButtons}>
              {header.buttons.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className={styles.content}>{children}</div>
    </div>
  );
};
