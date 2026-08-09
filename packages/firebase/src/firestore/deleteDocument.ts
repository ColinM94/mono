import { deleteDoc, doc } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getDb } from '../config';

interface Params {
  collection: string;
  id: string;
}

type Response = Promise<ApiResponse<undefined>>;

export const deleteDocument = async (params: Params): Response => {
  const { collection: collectionName, id } = params;

  try {
    await deleteDoc(doc(getDb(), collectionName, id));

    return {
      ok: true,
      data: undefined,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to delete record in collection: ${collectionName} with id ${id}`,
    });
  }
};
