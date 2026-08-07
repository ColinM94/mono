import type { OrderByDirection, WhereFilterOp } from 'firebase/firestore';
import type { KeyOf } from './general';

export type FirestoreWhereGeneric<T> =
  | [KeyOf<T>, WhereFilterOp, string | number | string[] | boolean | null]
  | undefined;

export type FirestoreOrderByGeneric<T> = [KeyOf<T>, OrderByDirection];

export type Metadata = {
  id: string;
  updatedAt?: number;
  createdAt: number;
};
