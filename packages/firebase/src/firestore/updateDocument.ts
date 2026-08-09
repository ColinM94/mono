import { doc, updateDoc } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getDb } from '../config';

interface Params<T> {
  id: string;
  data: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>;
  collection: string;
}

type Response = Promise<ApiResponse<null>>;

export const updateDocument = async <T>(params: Params<T>): Response => {
  const { id, collection: collectionName, data } = params;

  try {
    await updateDoc(doc(getDb(), collectionName, id), data);

    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to update document ${id} in collection ${collectionName}`,
    });
  }
};
