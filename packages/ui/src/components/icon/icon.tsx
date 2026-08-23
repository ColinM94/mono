import { SignOutIcon } from '@phosphor-icons/react';

// TODO: Check if the bundler can tree shake icons not used in an app.
const icons = {
  SignOutIcon,
};

type IconName = keyof typeof icons;

interface Props {
  name: IconName;
  className?: string;
}

export const Icon = (props: Props) => {
  const { name } = props;
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};
