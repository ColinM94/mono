import { isSignInWithEmailLink, signInWithEmailLink as signIn } from 'firebase/auth';
import { handleApiResponseError } from '@mono/shared/utils.ts';
import type { ApiResponse } from '@mono/shared/types.ts';

import { getAuth } from '../config.ts';

export const signInWithEmailLink = async (): Promise<ApiResponse<void>> => {
  try {
    if (isSignInWithEmailLink(getAuth(), window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');

      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }

      if (!email) throw new Error('No Email');

      await signIn(getAuth(), email, window.location.href);

      window.localStorage.removeItem('emailForSignIn');
    }

    return {
      ok: true,
      data: undefined,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: 'Something went wrong',
    });
  }
};
