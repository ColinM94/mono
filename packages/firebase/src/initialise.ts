import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { configureFirebase } from './config.ts';

export const initialiseFirebase = (options: FirebaseOptions, name?: string) => {
  const app = initializeApp(options, name);
  configureFirebase(app, getAuth(app), getStorage(app), getFirestore(app));
};
