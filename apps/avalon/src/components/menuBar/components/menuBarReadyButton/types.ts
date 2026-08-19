import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  showReady: boolean;
  showContinue: boolean;
  onClick?: () => void;
  canContinue?: () => string | true;
  canReady?: () => string | true;
  onContinue?: () => Promise<void>;
  onReady?: () => Promise<void>;
  className?: ClassName;
}
