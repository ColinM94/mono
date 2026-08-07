import type { OrderByDirection, WhereFilterOp } from 'firebase/firestore';
import type { KeyOf } from 'types/general';

type NewType<T> = [KeyOf<T>, WhereFilterOp, string | number | string[] | boolean | null];

export type FirestoreWhereGeneric<T> = NewType<T> | undefined;

export type FirestoreOrderByGeneric<T> = [KeyOf<T>, OrderByDirection];
