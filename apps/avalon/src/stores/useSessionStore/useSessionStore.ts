import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { playerDefault } from 'constants/defaults.ts';

import type { Actions, State } from './types';

const initialState: State = {
  sessionId: '',
  isAllReady: false,
  isMyPlayerHost: false,
  isMyPlayerLeader: false,
  myPlayer: playerDefault(),
  players: {},
  heading: {
    title: '',
    description: '',
  },
  activeQuest: {
    index: 0,
    leaderId: '',
    numPlayers: 5,
    players: [],
    memberSelectVotes: {},
    votesToSucceed: {},
    status: 'incomplete',
    isApproved: false,
    isSuccessful: false,
    isFailed: false,
  },
  step: 'lobby',
  playersArray: [],
  numPlayers: 0,
  activeMemberSelectVotes: {},
  numFailMemberSelectVotes: 0,
  numFailQuests: 0,
  characterIds: [],
  quests: {},
  activeMemberSelectVoteIndex: 0,
  selectedCharacterIds: ['merlin', 'assassin'],
};

export const useSessionStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      updateSessionStore: (update) => set({ ...update }),
      resetSessionsStore: () => set({ ...initialState }),
    }),
    {
      name: 'app',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
