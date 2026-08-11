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

/** Generates all valid dot-notation paths for an object's nested properties. */
export type Paths<T> = T extends readonly unknown[]
  ? never
  : T extends object
    ? {
        [K in keyof T & string]: T[K] extends readonly unknown[]
          ? `${K}`
          : T[K] extends object
            ? `${K}` | `${K}.${Paths<T[K]>}`
            : `${K}`;
      }[keyof T & string]
    : never;

export type ClassName = string | undefined;
