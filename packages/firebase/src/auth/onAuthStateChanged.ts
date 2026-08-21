import {
  onAuthStateChanged as firebaseOnAuthStateChanged,
  type User,
  type NextOrObserver,
} from 'firebase/auth';

import { getAuth } from '../config.ts';

export const onAuthStateChanged = (nextOrObserver: NextOrObserver<User>) => {
  return firebaseOnAuthStateChanged(getAuth(), nextOrObserver);
};
