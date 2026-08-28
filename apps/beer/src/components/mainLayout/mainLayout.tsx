import type { Children } from '@mono/shared/types';
import { classes } from '@mono/shared/utils';

import { Header } from 'components/header/header.tsx';

import styles from './styles.module.scss';

interface Props {
  children: Children;
  className?: string;
}

export const MainLayout = (props: Props) => {
  const { children, className } = props;

  return (
    <div className={styles.container}>
      <Header />

      <div className={classes(styles.content, className)}>{children}</div>
    </div>
  );
};
