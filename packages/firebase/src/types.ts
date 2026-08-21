import type { Paths } from '@mono/shared/types.ts';
import type { OrderByDirection, WhereFilterOp } from 'firebase/firestore';

type NewType<T> = [Paths<T>, WhereFilterOp, string | number | string[] | boolean | null];

export type FirestoreWhereGeneric<T> = NewType<T> | undefined;

export type FirestoreOrderByGeneric<T> = [Paths<T>, OrderByDirection];
