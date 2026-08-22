import { signInWithEmailAndPassword as signIn, type UserCredential } from 'firebase/auth';
import { handleApiResponseError } from '@mono/shared/utils.ts';
import type { ApiResponse } from '@mono/shared/types.ts';

import { getAuth } from '../config.ts';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<ApiResponse<{ user: UserCredential }>> => {
  try {
    const user = await signIn(getAuth(), email, password);

    return {
      ok: true,
      data: {
        user,
      },
    };
  } catch (error) {
    return handleApiResponseError({
      error,
    });
  }
};
