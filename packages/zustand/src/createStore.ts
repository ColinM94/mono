import { create, type StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const createStore = <T>(
  initialState: StateCreator<T>,
  options: {
    name: string;
    version?: number;
    partialize?: (state: T) => Partial<T>;
  }
) =>
  create<T>()(
    persist(initialState, {
      name: options.name,
      version: options.version ?? 1,
      storage: createJSONStorage(() => localStorage),
      ...(options.partialize && {
        partialize: options.partialize,
      }),
    })
  );
