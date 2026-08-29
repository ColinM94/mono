import * as React from 'react';
import { MainLayout } from 'components/mainLayout/mainLayout.tsx';
import styles from './styles.module.css';
import { InputNumber, InputText } from '@mono/ui/components';

export const SettingsPage = () => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState<number | undefined>();

  return (
    <MainLayout className={styles.container}>
      <InputText label="Name" value={name} setValue={setName} />
      <InputText label="Potato" value={name} setValue={setName} />
      <InputText label="Enter a name" value={name} setValue={setName} />
      <InputNumber label="Age" value={number} setValue={setNumber} />
    </MainLayout>
  );
};
