export type ApiResponseOk<T> = {
  ok: true;
  data: T;
};

export type ApiResponseError = {
  ok: false;
  error: {
    message: string;
  };
};

export type ApiResponse<T> = ApiResponseOk<T> | ApiResponseError;

export type Metadata = {
  id: string;
  updatedAt?: number;
  createdAt: number;
};

export type KeyOf<T> = {
  [K in keyof T & (string | number)]: T[K] extends object ? `${K}` | `${K}.${KeyOf<T[K]>}` : `${K}`;
}[keyof T & (string | number)];
