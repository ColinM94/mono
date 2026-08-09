import { deleteObject, ref } from 'firebase/storage';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getStorage } from '../config';

/**
 * Deletes a file from Firebase Storage.
 *
 * @param path The path of the file in Storage. e.g. images/games/bubble-woods/logo.png
 * @returns Boolean indicating if successful or not.
 */
type Response = Promise<ApiResponse<undefined>>;

export const deleteFile = async (path: string): Response => {
  try {
    const storageRef = ref(getStorage(), path);

    await deleteObject(storageRef);

    return {
      ok: true,
      data: undefined,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to delete file at path: ${path}`,
    });
  }
};
