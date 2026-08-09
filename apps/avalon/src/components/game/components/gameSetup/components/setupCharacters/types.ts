import { CharacterId } from 'types/general';

export interface Props {
  heading: string;
  characterIds: CharacterId[];
  selectedCharacterIds: string[];
  maxActiveCharacters: number;
  numActiveCharacters: number;
  allegiance: 'evil' | 'good';
  setCharacters: React.Dispatch<React.SetStateAction<CharacterId[]>>;
  className?: string;
}
