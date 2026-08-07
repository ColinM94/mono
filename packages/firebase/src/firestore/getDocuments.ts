import {
  getDocs,
  query,
  where,
  collection,
  QueryConstraint,
  orderBy,
  limit,
} from 'firebase/firestore';
import type { RequestResponse } from '@mono/shared/types';

import { trackError } from '@mono/shared/utils';
import type { FirestoreOrderByGeneric, FirestoreWhereGeneric } from '../types';
import type { Metadata } from 'types/firebase';

interface Config<T> {
  collection: string;
  /** Array of where clauses e.g. [["userId", "==", "12345"], ["userId", "==", "54321"]] */
  where?: FirestoreWhereGeneric<T>[];
  orderBy?: FirestoreOrderByGeneric<T>[];
  limit?: number;
}

export const getDocuments = async <T extends Metadata>(config: Config<T>): RequestResponse<T[]> => {
  const {
    collection: collectionName,
    where: whereClauses,
    orderBy: orderByClauses,
    limit: limitAmount,
  } = config;

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
      q = query(collection(db, collectionName), ...conditions, limit(limitAmount));
    } else {
      q = query(collection(db, collectionName), ...conditions);
    }

    const querySnapshot = await getDocs(q);

    const items: T[] = [];

    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id } as T);
    });

    return {
      success: true,
      data: items,
    };
  } catch (error) {
    trackError({
      error: error as Error,
      description: `Failed to getDocuments from ${collectionName}`,
      source: 'getDocuments',
    });

    return {
      success: false,
    };
  }
};
