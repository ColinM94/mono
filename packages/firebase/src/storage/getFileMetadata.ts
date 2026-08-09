import { getMetadata, getStorage, ref } from 'firebase/storage';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

/**
 * Gets metadata for a file in Firebase Storage.
 *
 * @param path The path of the file in Storage. e.g. images/games/bubble-woods/logo.png
 */
interface Params {
  path: string;
}

type Response = Promise<ApiResponse<{ metadata: Awaited<ReturnType<typeof getMetadata>> }>>;

export const getFileMetadata = async (params: Params): Response => {
  try {
    const storageRef = ref(getStorage(), params.path);

    const metadata = await getMetadata(storageRef);

    return {
      ok: true,
      data: {
        metadata,
      },
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to get file metadata at path: ${params.path}`,
    });
  }
};
