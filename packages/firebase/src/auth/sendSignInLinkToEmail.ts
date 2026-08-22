import { sendSignInLinkToEmail as send } from 'firebase/auth';
import type { ApiResponse } from '@mono/shared/types.ts';

import { getAuth } from '../config.ts';
import { handleApiResponseError } from '@mono/shared/utils.ts';

export const sendSignInLinkToEmail = async (email: string): Promise<ApiResponse<void>> => {
  try {
    await send(getAuth(), email, { url: window.location.href, handleCodeInApp: true });
    window.localStorage.setItem('emailForSignIn', email);

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
