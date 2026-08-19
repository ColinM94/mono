import { useStoreWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import type { UseBoundStore, StoreApi } from 'zustand';

export const createStoreSelector =
  <T>(store: UseBoundStore<StoreApi<T>>) =>
  <K extends keyof T>(...keys: [K, ...K[]]) =>
    useStoreWithEqualityFn(
      store,
      (state) => {
        const result = {} as Pick<T, K>;

        for (const key of keys) {
          result[key] = state[key];
        }

        return result;
      },
      shallow
    );
