import { deleteDoc, doc } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils.ts';
import type { ApiResponse } from '@mono/shared/types.ts';

import { getDb } from '../config';

interface Params {
  collection: string;
  id: string;
}

type Response = Promise<ApiResponse<null>>;

export const deleteDocument = async (params: Params): Response => {
  const { collection: collectionName, id } = params;

  try {
    await deleteDoc(doc(getDb(), collectionName, id));

    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to delete record in collection: ${collectionName} with id ${id}`,
    });
  }
};
