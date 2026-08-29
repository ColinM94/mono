import type { Surface } from '@mono/shared/types';
import type { FormFieldProps } from '../formField/types.ts';

export interface InputTextProps extends Omit<FormFieldProps, 'children'> {
  value: string;
  placeholder?: string;
  surface?: Surface;
  setValue: (value: string) => void;
  className?: string;
}
