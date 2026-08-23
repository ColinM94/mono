import { generateUniqueId } from '@mono/shared/utils';
import type { GameSession, Player } from 'types/gameSession';
import type { User } from 'types/user';

const memberSelectVotesDefault = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };

export const userDefault = (): User => {
  return {
    id: generateUniqueId(),
    name: '',
    sessionId: null,
    imageUrl: '',
  };
};

export const playerDefault = (): Player => {
  return {
    id: '',
    name: '',
    characterId: 'servant1',
    isMyPlayerHost: false,
    joinedAt: 0,
    isReady: false,
  };
};

export const sessionDefault = (): GameSession => {
  return {
    id: '',
    name: '',
    players: {},
    numPlayers: 5,
    createdBy: '',
    step: 'lobby',
    characterIds: [],
    selectedCharacterIds: ['merlin', 'assassin'],
    isMyPlayerHostPlaying: true,
    // numFailVotes: 0,
    numFailQuests: 0,
    isRitualFinished: false,
    activeQuestIndex: 0,
    activeMemberSelectVoteIndex: 0,
    numFailMemberSelectVotes: 0,
    quests: {
      0: {
        index: 0,
        status: 'incomplete',
        numPlayers: 5,
        leaderId: '',
        players: [],
        memberSelectVotes: memberSelectVotesDefault,
        votesToSucceed: {},
        isApproved: false,
        isSuccessful: false,
        isFailed: false,
      },
      1: {
        index: 1,
        status: 'incomplete',
        numPlayers: 5,
        leaderId: '',
        players: [],
        memberSelectVotes: memberSelectVotesDefault,
        votesToSucceed: {},
        isApproved: false,
        isSuccessful: false,
        isFailed: false,
      },
      2: {
        index: 2,
        status: 'incomplete',
        numPlayers: 5,
        leaderId: '',
        players: [],
        memberSelectVotes: memberSelectVotesDefault,
        votesToSucceed: {},
        isApproved: false,
        isSuccessful: false,
        isFailed: false,
      },
      3: {
        index: 3,
        status: 'incomplete',
        numPlayers: 5,
        leaderId: '',
        players: [],
        memberSelectVotes: memberSelectVotesDefault,
        votesToSucceed: {},
        isApproved: false,
        isSuccessful: false,
        isFailed: false,
      },
      4: {
        index: 4,
        status: 'incomplete',
        numPlayers: 5,
        leaderId: '',
        players: [],
        memberSelectVotes: memberSelectVotesDefault,
        votesToSucceed: {},
        isApproved: false,
        isSuccessful: false,
        isFailed: false,
      },
    },
  };
};
