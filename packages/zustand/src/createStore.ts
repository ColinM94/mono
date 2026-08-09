import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const createStore = <T>(
  initialState: T,
  options: {
    name: string;
    version?: number;
    partialize?: (state: T) => Partial<T>;
  }
) =>
  create<T>()(
    persist(() => initialState, {
      name: options.name,
      version: options?.version ?? 1,
      ...(options?.partialize && { partialize: options.partialize }),
    })
  );
