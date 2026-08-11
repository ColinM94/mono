import type { ClassName } from '@mono/shared/types';

export interface Props {
  value: string;
  setValue: (value: string) => void;
  type?: 'text' | 'number';
  onEnterClick?: () => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  children?: React.ReactNode;
  rightLabel?: string;
  inputClassName?: string;
  className?: ClassName;
}
