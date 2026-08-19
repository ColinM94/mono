import { signOut } from '@mono/firebase/auth';

import { Button } from 'components/button/button.tsx';
import { MainLayout } from 'layouts/mainLayout/mainLayout.tsx';

import styles from './styles.module.scss';

export const SettingsPage = () => {
  return (
    <MainLayout className={styles.container}>
      <div className={styles.content}>
        <Button
          label="Sign Out"
          type="danger"
          onClick={() => signOut()}
          className={styles.signOutButton}
        />
      </div>
    </MainLayout>
  );
};
