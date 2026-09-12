// TODO: Check if the bundler can tree shake icons not used in an app.

import { classes } from '@mono/shared/utils';
import { icons } from './icons.ts';
import type { IconName } from './types.ts';
import styles from './style.module.css';

interface Props {
  name: IconName;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  className?: string;
}

export const Icon = (props: Props) => {
  const { name } = props;
  const IconComponent = icons[name];

  return <IconComponent {...props} className={classes(props.className, styles.icon)} />;
};
