import type { Children } from 'types/general.ts';

import { Header } from './components/header/header.tsx';
import styles from './styles.module.css';

interface Props {
  children: Children;
}

export const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
