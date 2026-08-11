import { userDefault } from 'constants/defaults';

import { createStore } from '@mono/zustand';

import type { Toast } from 'types/toast';
import type { User } from 'types/user';

export type State = {
  user: User;
  toast: Toast | null;
};

export type Actions = {
  updateAppStore: (update: Partial<State>) => void;
  showToast: (text: string, type?: Toast['type']) => void;
  deleteToast: () => void;
};

export const useAppStore = createStore<State & Actions>(
  (set) => ({
    user: userDefault(),
    toast: null,
    showToast: (text, type) =>
      set({
        toast: {
          text,
          type,
          createdAt: Date.now(),
        },
      }),
    deleteToast: () => set({ toast: null }),
    updateAppStore: (update) => set(update),
  }),
  {
    name: 'app',
    partialize: (state) => ({ user: state.user }),
  }
);
