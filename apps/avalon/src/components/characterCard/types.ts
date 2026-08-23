import type { ClassName } from '@mono/shared/types';
import type { Character } from 'types/characters';
import type { CharacterId } from 'types/general';

export interface Props {
  character: Character;
  onClick?: (characterId: CharacterId) => void;
  orientation?: 'portrait' | 'landscape';
  isActive?: boolean;
  showInfoButton?: boolean;
  disableAnimation?: boolean;
  showName?: boolean;
  showDescription?: boolean;
  revealed?: boolean;
  className?: ClassName;
}
