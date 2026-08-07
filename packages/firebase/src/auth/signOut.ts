import { signOut as firebaseSignOut } from 'firebase/auth';
import { getAuth } from '../config';

export const signOut = () => firebaseSignOut(getAuth());
