export type Test = '';

export type RequestResponseSuccess<T> = {
  data: T;
  success: true;
};

export type RequestResponseFail = {
  success: false;
};

export type RequestResponse<T> = Promise<RequestResponseSuccess<T> | RequestResponseFail>;

export type Metadata = {
  id: string;
  updatedAt?: number;
  createdAt: number;
};

export type KeyOf<T> = {
  [K in keyof T & (string | number)]: T[K] extends object ? `${K}` | `${K}.${KeyOf<T[K]>}` : `${K}`;
}[keyof T & (string | number)];
