import { classes } from '@mono/shared/utils';

import styles from './styles.module.css';
import { Icon } from '../icon/icon.tsx';
import type { ButtonProps } from './types.ts';

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    label,
    variant = 'primary',
    surface = 2,
    size = 'medium',
    icon,
    to,
    target,
    disabled,
    onClick,
    className,
  } = props;

  const classNames = classes(
    'ui-button',
    `ui-button-${variant}`,
    variant === 'secondary' && `surface-${surface}`,
    variant === 'secondary' && `surface-${surface + 1}-hover`,
    label && icon && styles.iconAndLabel,
    styles[`variant-${variant}`],
    !label && icon && styles.square,
    styles[`size-${size}`],
    styles.container,
    className,
  );

  const content = (
    <>
      {icon && <Icon name={icon} className={styles.icon} />}
      {label && <span className={styles.label}>{label}</span>}
    </>
  );

  if (to) {
    return (
      <a target={target} href={to} onClick={(e) => onClick?.(e)} className={classNames}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={(e) => onClick?.(e)} disabled={disabled} className={classNames}>
      {content}
    </button>
  );
};
