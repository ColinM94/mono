import { addDoc, collection } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils.ts';
import type { ApiResponse } from '@mono/shared/types.ts';

import { getDb } from '../config';

interface Params<T> {
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
  collection: string;
}

type Response = Promise<ApiResponse<{ docId: string }>>;

export const addDocument = async <T>(params: Params<T>): Response => {
  const { collection: collectionName, data } = params;

  try {
    const result = await addDoc(collection(getDb(), collectionName), data);

    return {
      ok: true,
      data: {
        docId: result.id,
      },
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to add document to collection: ${params.collection}`,
    });
  }
};
