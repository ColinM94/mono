import type { Children, Surface } from '@mono/shared/types';
import { classes } from '@mono/shared/utils';

import { Button } from '../button/button.tsx';
import type { ButtonProps } from '../button/types.ts';

import styles from './styles.module.css';

interface CardProps {
  surface?: Surface;
  header?: {
    heading: string;
    buttons?: (ButtonProps & { hidden?: boolean })[];
  };
  children: Children;
  contentClassName?: string;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { header, surface = 1, children, contentClassName, className } = props;

  return (
    <div className={classes(styles.container, `surface-${surface}`, className)}>
      {header && (
        <div className={styles.header}>
          <h3 className={styles.heading}>{header.heading}</h3>

          {header.buttons && !header.buttons.every((button) => button.hidden) && (
            <div className={styles.headerButtons}>
              {header.buttons.map((button, index) => {
                if (button.hidden) return null;
                return <Button key={index} {...button} />;
              })}
            </div>
          )}
        </div>
      )}

      <div className={classes(styles.content, contentClassName)}>{children}</div>
    </div>
  );
};
