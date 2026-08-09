import { doc, collection } from 'firebase/firestore';
import { getDb } from '../config';

export const getDocumentRef = (collectionName: string) => {
  try {
    const collectionRef = collection(getDb(), collectionName);

    const docRef = doc(collectionRef);

    return docRef;
  } catch (error) {
    console.error(error, 'getDocRef');
    return undefined;
  }
};
