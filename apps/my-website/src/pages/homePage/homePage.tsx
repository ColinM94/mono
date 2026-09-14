import avalonScreenshot from 'assets/images/avalon_landscape.webp';
import drunkScreenshot from 'assets/images/drunk_landscape.webp';
import { AppPreviewCard } from 'components/appPreviewCard/appPreviewCard.tsx';
import avalonPackageJson from '../../../../avalon/package.json';
import drunkPackageJson from '../../../../drunk/package.json';
import styles from './styles.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <AppPreviewCard
        label="Avalon"
        description="An adaption of the boardgame Avalon for web"
        image={avalonScreenshot}
        link="https://avalon.colinmaher.dev"
        version={avalonPackageJson.version}
        gitUrl="https://github.com/ColinM94/mono/tree/main/apps/avalon"
      />

      <AppPreviewCard
        label="Drunk"
        description="Keep track of your blood alcohol level as you drink"
        image={drunkScreenshot}
        link="https://drunk.colinmaher.dev"
        version={drunkPackageJson.version}
        gitUrl="https://github.com/ColinM94/mono/tree/main/apps/drunk"
      />
    </div>
  );
};
