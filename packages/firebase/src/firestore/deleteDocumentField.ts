import { deleteField, doc, updateDoc } from 'firebase/firestore';

import type { ApiResponse, Paths } from '@mono/shared/types';
import { handleApiResponseError } from '@mono/shared/utils';

import { getDb } from '../config.ts';

interface Params<T> {
  collection: string;
  id: string;
  field: Paths<T>;
}

type Response = Promise<ApiResponse<null>>;

export const deleteDocumentField = async <T>(params: Params<T>): Response => {
  const { collection: collectionName, id, field } = params;

  try {
    const documentReference = doc(getDb(), collectionName, id);

    await updateDoc(documentReference, {
      [field]: deleteField(),
    });

    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    return handleApiResponseError({
      description: 'Failed to delete document',
      error,
    });
  }
};
