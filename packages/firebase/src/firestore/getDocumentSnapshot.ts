import { doc, onSnapshot } from 'firebase/firestore';
import { getDb } from '../config.ts';

interface Params<T> {
  collection: string;
  id: string;
  callback: (data: T | undefined) => void;
}

export const getDocumentSnapshot = <T>(params: Params<T>) => {
  try {
    const docRef = doc(getDb(), params.collection, params.id);

    const unsubscribe = onSnapshot(docRef, (document) => {
      const data = { ...document.data(), id: document.id } as T;

      if (document.exists()) {
        params.callback(data);
      } else {
        params.callback(undefined);
      }
    });

    return unsubscribe;
  } catch (error) {
    console.error(error, 'getDocumentSnapshot');
    return () => {};
  }
};
