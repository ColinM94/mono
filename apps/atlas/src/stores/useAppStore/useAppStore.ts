import { createStore, createStoreSelector } from '@mono/zustand';

type AppStoreState = {
  user: { name: string };
  isAuthLoading: boolean;
  showNavbar: boolean;
  darkMode: boolean;
  filmsLayout: 'full' | 'compact';
  booksLayout: 'full' | 'compact';
  peopleLayout: 'full' | 'compact';
};

export const useAppStore = createStore<AppStoreState>(
  {
    user: { name: '' },
    isAuthLoading: true,
    darkMode: false,
    showNavbar: false,
    filmsLayout: 'compact',
    booksLayout: 'compact',
    peopleLayout: 'compact',
  },
  {
    name: 'app',
    partialize: ({ darkMode }) => ({ darkMode }),
  }
);

export const useAppStoreSlice = createStoreSelector(useAppStore);
