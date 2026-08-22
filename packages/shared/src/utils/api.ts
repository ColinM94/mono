import type { ApiResponseError } from '../types';
import { trackError } from './trackError.ts';

interface Params {
  error: Error | unknown;
  description?: string;
}

export const handleApiResponseError = (params: Params): ApiResponseError => {
  const { error, description = 'Something went wrong' } = params;

  const err = error instanceof Error ? error : new Error(String(error));

  trackError({
    error: err,
    source: 'unknown',
    description,
  });

  return {
    ok: false,
    error: {
      message: err.message,
    },
  };
};
