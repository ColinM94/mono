import type { QueryConstraint } from 'firebase/firestore';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

import { handleApiResponseError } from '@mono/shared/utils.ts';
import type { ApiResponse } from '@mono/shared/types.ts';

import type { FirestoreOrderByGeneric, FirestoreWhereGeneric } from '../types';
import { getDb } from '../config';

interface Params<T> {
  collection: string;
  /** Array of where clauses e.g. [["userId", "==", "12345"], ["userId", "==", "54321"]] */
  where?: FirestoreWhereGeneric<T>[];
  orderBy?: FirestoreOrderByGeneric<T>[];
  limit?: number;
}

type Response<T> = Promise<ApiResponse<{ documents: T[] }>>;

export const getDocuments = async <T>(params: Params<T>): Response<T> => {
  const {
    collection: collectionName,
    where: whereClauses,
    orderBy: orderByClauses,
    limit: limitAmount,
  } = params;

  try {
    const conditions: QueryConstraint[] = [];

    whereClauses?.forEach((whereClause) => {
      if (!whereClause) return;

      const newWhere = where(whereClause[0], whereClause[1], whereClause[2]);

      conditions.push(newWhere);
    });

    orderByClauses?.forEach((orderByClause) => {
      const newOrderBy = orderBy(orderByClause[0], orderByClause[1]);

      conditions.push(newOrderBy);
    });

    let q;

    if (limitAmount) {
      q = query(collection(getDb(), collectionName), ...conditions, limit(limitAmount));
    } else {
      q = query(collection(getDb(), collectionName), ...conditions);
    }

    const querySnapshot = await getDocs(q);

    const items: T[] = [];

    querySnapshot.forEach((doc) => {
      items.push({
        ...doc.data(),
        id: doc.id,
      } as T);
    });

    return {
      ok: true,
      data: {
        documents: items,
      },
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to getDocuments from ${collectionName}`,
    });
  }
};
