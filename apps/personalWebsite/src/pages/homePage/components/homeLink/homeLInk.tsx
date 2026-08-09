import { classes } from '@mono/shared/utils';

import styles from './styles.module.scss';

interface Props {
  href: string;
  title: string;
  image: string;
  className?: string | undefined;
  imageClassName?: string | undefined;
}
export const HomeLink = (props: Props) => {
  const { href, title, image, className, imageClassName } = props;
  return (
    <a target="_blank" href={href} title={title} className={classes(styles.container, className)}>
      <img src={image} className={classes(styles.image, imageClassName)} />
    </a>
  );
};
