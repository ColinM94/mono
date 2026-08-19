import type { ClassName } from '@mono/shared/types.ts';
import type { CharacterId } from 'types/general';

export interface Props {
  heading: string;
  characterIds: CharacterId[];
  selectedCharacterIds: string[];
  maxActiveCharacters: number;
  numActiveCharacters: number;
  allegiance: 'evil' | 'good';
  setCharacters: React.Dispatch<React.SetStateAction<CharacterId[]>>;
  className?: ClassName;
}
