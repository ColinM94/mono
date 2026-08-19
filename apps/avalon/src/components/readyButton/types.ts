import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  canReady: true | string;
  onReady: () => void | Promise<void>;
  className?: ClassName;
}
