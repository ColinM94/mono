import { addDoc, collection } from 'firebase/firestore';
import { trackError } from '@mono/shared/utils';

import { getDb } from '../config';

interface Params<T> {
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
  collection: string;
}

export const addDocument = async <T>(params: Params<T>) => {
  try {
    const { collection: collectionName, data } = params;

    const result = await addDoc(collection(getDb(), collectionName), data);

    return {
      data: result,
      success: true,
    };
  } catch (error) {
    trackError({
      error: error as Error,
      source: 'addDocument',
    });

    return {
      success: false,
    };
  }
};
