import { deleteField, doc, updateDoc } from 'firebase/firestore';

import type { ApiResponse } from '@mono/shared/types';
import { handleApiResponseError } from '@mono/shared/utils';

import { getDb } from '../config';

interface Params {
  collection: string;
  documentId: string;
  field: string;
}

type Response = Promise<ApiResponse<null>>;

export const deleteDocumentField = async (params: Params): Response => {
  const { collection: collectionName, documentId, field } = params;

  try {
    const documentReference = doc(getDb(), collectionName, documentId);

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
