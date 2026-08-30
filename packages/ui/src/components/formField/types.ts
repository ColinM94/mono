import type { Children } from '@mono/shared/types';

export interface FormFieldProps {
  label?: string;
  children: Children;
  inputClassName?: string;
  className?: string;
}
