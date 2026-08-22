import { Link } from 'wouter';

import { Button } from '@mono/ui/components.ts';

import styles from './styles.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.code}>404</div>
      <div className={styles.message}>Page not found!</div>
      <Link to="/" className={styles.homeButton}>
        Go Back
      </Link>

      <Button label="I am a button" onClick={() => alert('Hello')} variant="primary" />
    </div>
  );
};
