import { QueryConstraint, collection, getCountFromServer, query, where } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getDb } from '../config';
import type { FirestoreWhereGeneric } from '../types';

interface Params<T> {
  collection: string;
  where?: FirestoreWhereGeneric<T>[];
}

type Response = Promise<ApiResponse<{ docsCount: number }>>;

export const countDocuments = async <T>(params: Params<T>): Response => {
  try {
    const { collection: collectionName, where: whereClauses } = params;

    const conditions: QueryConstraint[] = [];

    whereClauses?.forEach((whereClause) => {
      if (!whereClause) return;

      const newWhere = where(whereClause[0], whereClause[1], whereClause[2]);

      conditions.push(newWhere);
    });

    const q = query(collection(getDb(), collectionName), ...conditions);

    const snapshot = await getCountFromServer(q);

    return {
      ok: true,
      data: {
        docsCount: snapshot.data().count || 0,
      },
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to count documents in collection: ${params.collection}`,
    });
  }
};
