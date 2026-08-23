import * as React from 'react';

import { Button, InputText } from '@mono/ui/components.ts';
import { sendSignInLinkToEmail } from '@mono/firebase/auth.ts';
import { isValidEmail } from '@mono/shared/utils.ts';

import styles from './styles.module.css';

export const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [isEmailSent, setIsEmailSent] = React.useState(false);

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await sendSignInLinkToEmail(email);

      if (!response.ok) throw new Error(response.error.message);

      setIsEmailSent(true);

      alert(`Link sent to ${email}`);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {!isEmailSent && (
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <InputText value={email} setValue={setEmail} placeholder="Email" surface={2} />
            <Button
              label="Send Login Link"
              type="submit"
              surface={2}
              disabled={!isValidEmail(email)}
              className={styles.button}
            />
          </form>
        )}

        {isEmailSent && (
          <div>
            <h4>Login link sent to </h4>
            <h5>{email}</h5>
          </div>
        )}
      </div>
    </div>
  );
};
