import { signOut as firebaseSignOut } from 'firebase/auth';
import type { ApiResponse } from '@mono/shared/types';
import { handleApiResponseError } from '@mono/shared/utils';

import { getAuth } from '../config.ts';

export const signOut = async (): Promise<ApiResponse<void>> => {
  try {
    await firebaseSignOut(getAuth());

    return {
      ok: true,
      data: undefined,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
    });
  }
};
