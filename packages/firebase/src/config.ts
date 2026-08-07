import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';
import type { FirebaseApp } from 'firebase/app';

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let storage: FirebaseStorage | undefined;
let db: Firestore | undefined;

export const configureFirebase = (
  firebaseApp: FirebaseApp,
  firebaseAuth: Auth,
  firebaseStorage: FirebaseStorage,
  firestore: Firestore
) => {
  app = firebaseApp;
  auth = firebaseAuth;
  storage = firebaseStorage;
  db = firestore;
};

export const getApp = () => {
  if (!app) throw new Error('Firebase has not been initialised.');
  return app;
};

export const getDb = () => {
  if (!db) throw new Error('Firebase has not been initialised.');
  return db;
};

export const getAuth = () => {
  if (!auth) throw new Error('Firebase has not been initialised.');
  return auth;
};

export const getStorage = () => {
  if (!storage) throw new Error('Firebase has not been initialised.');
  return storage;
};
