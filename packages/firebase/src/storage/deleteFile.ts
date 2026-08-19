import { deleteObject, ref } from 'firebase/storage';

import { handleApiResponseError } from '@mono/shared/utils.ts';
import type { ApiResponse } from '@mono/shared/types.ts';

import { getStorage } from '../config.ts';

/**
 * Deletes a file from Firebase Storage.
 *
 * @param path The path of the file in Storage. e.g. images/games/bubble-woods/logo.png
 * @returns Boolean indicating if successful or not.
 */
type Response = Promise<ApiResponse<null>>;

export const deleteFile = async (path: string): Response => {
  try {
    const storageRef = ref(getStorage(), path);

    await deleteObject(storageRef);

    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to delete file at path: ${path}`,
    });
  }
};
