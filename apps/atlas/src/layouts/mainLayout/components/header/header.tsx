import { Button } from '@mono/ui/components';
import { classes } from '@mono/shared/utils';
import { signOut } from '@mono/firebase/auth';

import styles from './styles.module.css';

interface Props {
  className: string;
}

export const Header = (props: Props) => {
  const { className } = props;

  return (
    <div className={classes(styles.container, className)}>
      <Button label="Sign Out" onClick={signOut} surface={2} className={styles.signOutButton} />
    </div>
  );
};
