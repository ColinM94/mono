// TODO: Check if the bundler can tree shake icons not used in an app.

import { icons } from './icons.ts';
import type { IconName } from './types.ts';

interface Props {
  name: IconName;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  className?: string;
}

export const Icon = (props: Props) => {
  const { name } = props;
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};
