export const baseUrl = window.location.origin;
export const isDev = import.meta.env.MODE === 'development';

export const numPlayersByQuest = [
  // questIndex 0
  [2, 2, 2, 3, 3, 3],
  // questIndex 1
  [3, 3, 3, 4, 4, 4],
  // questIndex 2
  [2, 4, 3, 4, 4, 4],
  // questIndex 3
  [4, 3, 4, 5, 5, 5],
  // questIndex 4
  [4, 4, 4, 5, 5, 5],
];

export const numFailVotesToFailQuest = [
  // questIndex 0
  [2, 2, 2, 3, 3, 3],
  // questIndex 1
  [3, 3, 3, 4, 4, 4],
  // questIndex 2
  [2, 4, 3, 4, 4, 4],
  // questIndex 3
  [4, 3, 4, 5, 5, 5],
  // questIndex 4
  [4, 4, 4, 5, 5, 5],
];
