import { ref, uploadBytes, type UploadMetadata } from 'firebase/storage';

import { handleApiResponseError } from '@mono/shared/utils';
import type { ApiResponse } from '@mono/shared/types';

import { getStorage } from '../config';

interface Params {
  file: File;
  path: string;
  metadata?: UploadMetadata;
}

/**
 * Uploads a file to Firebase Storage.
 *
 * @param file The file to be uploaded.
 * @param path The path of the file in Storage. e.g. images/games/bubble-woods/logo.png
 * @returns Boolean indicating if successful or not.
 */
type Response = Promise<ApiResponse<null>>;

export const uploadFile = async (params: Params): Response => {
  const { file, path, metadata } = params;

  try {
    const storageRef = ref(getStorage(), path);

    await uploadBytes(storageRef, file, metadata);

    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    return handleApiResponseError({
      error,
      description: `Failed to upload file to ${path}`,
    });
  }
};
