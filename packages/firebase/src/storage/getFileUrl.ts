import { getDownloadURL, ref } from 'firebase/storage';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getStorage } from '../config';

/**
 * Gets URL for file located at certain path.
 *
 * @param path The path of the file in Storage. e.g. images/games/bubble-woods/logo.png
 * @returns A url to this file.
 */
interface Params {
  path: string;
}

type Response = Promise<ApiResponse<{ url: string }>>;

export const getFileUrl = async (params: Params): Response => {
  try {
    const url = await getDownloadURL(ref(getStorage(), params.path));

    return {
      ok: true,
      data: {
        url,
      },
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to get fileUrl at path: ${params.path}`,
    });
  }
};
