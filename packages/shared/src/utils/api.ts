import type { ApiResponseError } from '../types';
import { trackError } from './trackError';

interface Params {
  error: Error | unknown;
  description: string;
}

export const handleApiResponseError = (params: Params): ApiResponseError => {
  const { error, description } = params;

  const err = error instanceof Error ? error : new Error(String(error));

  trackError({
    error: err,
    source: 'getDocumentsSnapshot',
    description,
  });

  return {
    ok: false,
    error: {
      message: err.message,
    },
  };
};
