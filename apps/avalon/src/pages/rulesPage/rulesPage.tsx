import { MainLayout } from 'layouts/mainLayout/mainLayout.tsx';

import { PDFViewer } from 'components/pdfViewer/pdfViewer.tsx';
import rules from 'assets/rules.pdf';

import styles from './styles.module.scss';

export const RulesPage = () => {
  return (
    <MainLayout showBackButton showHeader heading="Rules" className={styles.container}>
      <PDFViewer file={rules} className={styles.pdf} />
    </MainLayout>
  );
};
