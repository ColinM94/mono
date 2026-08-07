import { addDoc, collection } from 'firebase/firestore';
import { trackError } from '@mono/shared/utils';

import { db } from 'inits/firebase';
import type { Collection } from 'types/general';

interface Params<T> {
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
  collection: Collection;
}

export const addDocument = async <T>(params: Params<T>) => {
  try {
    const { collection: collectionName, data } = params;

    const result = await addDoc(collection(db, collectionName), data);

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
