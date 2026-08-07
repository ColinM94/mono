import { doc, updateDoc } from 'firebase/firestore';
import { trackError } from '@mono/shared/utils';

import { getDb } from '../config';

interface Params<T> {
  id: string;
  data: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>;
  collection: string;
}

export const updateDocument = async <T>(params: Params<T>) => {
  const { id, collection: collectionName, data } = params;
  try {
    await updateDoc(doc(getDb(), collectionName, id), data);

    return {
      data,
      success: true,
    };
  } catch (error) {
    trackError({
      error: error as Error,
      source: 'updateDocument',
      description: `Failed to update document ${id} in collection ${collectionName}`,
    });

    return {
      success: false,
    };
  }
};
