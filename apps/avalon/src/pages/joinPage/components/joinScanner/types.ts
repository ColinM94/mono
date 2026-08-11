import type { ClassName } from '@mono/shared/types';

export interface Props {
  showScanner: boolean;
  setShowScanner: (show: boolean) => void;
  onScanSuccess: (code: string) => void;
  className?: ClassName;
}
