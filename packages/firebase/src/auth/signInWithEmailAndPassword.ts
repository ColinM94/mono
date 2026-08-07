import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from '../config';

export const signInWithEmailAndPassword = (email: string, password: string) =>
  firebaseSignInWithEmailAndPassword(getAuth(), email, password);
