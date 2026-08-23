import { collection, doc, setDoc } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getDb } from '../config.ts';

interface Params<T> {
  collection: string;
  data: Partial<T>;
  merge?: boolean;
  id: string;
}

type Response = Promise<ApiResponse<null>>;

export const setDocument = async <T>(params: Params<T>): Response => {
  const { collection: collectionName, data, id, merge = false } = params;

  try {
    const collectionRef = collection(getDb(), collectionName);

    const docRef = doc(collectionRef, id);

    await setDoc(docRef, data, { merge });

    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to set document in collection: ${collectionName} and id: ${id}`,
    });
  }
};
