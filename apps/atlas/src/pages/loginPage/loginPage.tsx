import * as React from 'react';

import { Button, InputText } from '@mono/ui/components.ts';
import { sendSignInLinkToEmail } from '@mono/firebase/auth.ts';

import styles from './styles.module.css';

export const LoginPage = () => {
  const [email, setEmail] = React.useState('');

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await sendSignInLinkToEmail(email);

      if (!response.ok) throw new Error('Failed to send email');

      alert(`Link sent to ${email}`);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <InputText value={email} setValue={setEmail} />
        <Button label="Login" type="submit" />
      </form>
    </div>
  );
};
