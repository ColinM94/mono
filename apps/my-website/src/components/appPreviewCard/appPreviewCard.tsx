import { Button, Row } from '@mono/ui/components';

import styles from './styles.module.css';

interface Props {
  label: string;
  description: string;
  image: string;
  link: string;
  version: string;
  gitUrl: string;
}

export const AppPreviewCard = (props: Props) => {
  const { label, description, image, link, version, gitUrl } = props;

  return (
    <a href={link} className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.image} />
      </div>

      <Row>
        <div className={styles.info}>
          <div className={styles.infoHeading}>{label}</div>
          <div className={styles.infoDescription}>{description}</div>
        </div>

        <div className={styles.gitInfo}>
          <Button
            icon="GithubLogoIcon"
            label={`v${version}`}
            variant="secondary"
            target="_blank"
            to={gitUrl}
            onClick={(e) => e.stopPropagation()}
            className={styles.gitInfoButton}
          />
        </div>
      </Row>
    </a>
  );
};
