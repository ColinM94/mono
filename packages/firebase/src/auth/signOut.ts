import { signOut as firebaseSignOut } from 'firebase/auth';
import { getAuth } from '../config.ts';

export const signOut = () => firebaseSignOut(getAuth());
