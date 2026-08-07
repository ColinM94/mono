import { deleteDoc, doc } from 'firebase/firestore';
import { trackError } from '@mono/shared/utils';

import { db } from 'inits/firebase';
import type { Collection, RequestResponse } from 'types/general';

interface Params {
  collection: Collection;
  id: string;
}

export const deleteDocument = async (params: Params): RequestResponse<undefined> => {
  const { collection: collectionName, id } = params;

  try {
    await deleteDoc(doc(db, collectionName, id));

    return {
      data: undefined,
      success: true,
    };
  } catch (error) {
    trackError({
      error: error as Error,
      description: `Failed to delete record in collection: ${collectionName} with id ${id}`,
      source: 'deleteRecord',
    });
    return {
      success: false,
    };
  }
};
