import type { Surface } from '@mono/shared/types';
import type { FormFieldProps } from '../formField/types.ts';

export interface InputNumberProps extends Omit<FormFieldProps, 'children'> {
  value: number | undefined;
  placeholder?: string;
  surface?: Surface;
  setValue: (value: number | undefined) => void;
  className?: string;
}
