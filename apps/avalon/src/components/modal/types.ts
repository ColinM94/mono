import type { ClassName } from '@mono/shared/types.ts';

export interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  children: React.ReactNode;
  className?: ClassName;
}
