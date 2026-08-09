import { doc, getDoc } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getDb } from '../config';

interface Params {
  collection: string;
  id: string;
}

type Response<T> = Promise<ApiResponse<{ document: T }>>;

export const getDocument = async <T>(params: Params): Response<T> => {
  const { collection: collectionName, id } = params;

  try {
    const document = await getDoc(doc(getDb(), collectionName, id));

    if (!document.exists()) {
      throw new Error('Document does not exist');
    }

    return {
      ok: true,
      data: {
        document: document.data() as T,
      },
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to getDocument ${params.id} from ${collectionName}`,
    });
  }
};
