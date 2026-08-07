import { Link, useLocation } from 'wouter';
import { classes, getCurrentRouteName } from '@mono/shared/utils';

import { sections } from 'constants/sections';
import { Icon } from 'components/icon/icon';

import styles from './styles.module.scss';

export const Navbar = () => {
  const [location] = useLocation();

  const pageId = getCurrentRouteName(location);

  return (
    <div className={styles.container}>
      {Object.values(sections).map((section) => (
        <Link
          to={`/${section.id}`}
          key={section.id}
          className={classes(styles.button, pageId === section.id && styles.buttonActive)}
        >
          <Icon icon={section.icon} className={styles.buttonIcon} />
        </Link>
      ))}
    </div>
  );
};
