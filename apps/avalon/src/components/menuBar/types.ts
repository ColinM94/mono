import type { ClassName } from '@mono/shared/types';

export interface Props {
  showContinue: boolean;
  showReady: boolean;
  onClick?: () => void;
  onClickDisabled?: () => void;
  canContinue?: () => string | true;
  canReady?: () => string | true;
  onContinue?: () => Promise<void>;
  onReady?: () => Promise<void>;
  className?: ClassName;
}
