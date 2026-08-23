import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { initialiseFirebase } from '@mono/firebase/initialise';

import { firebaseConfig } from 'constants/config.ts';

import { Router } from './router.tsx';
import '@mono/ui/styles.css';
import './styles/global.css';
import './styles/ui.css';
import './styles/vars.css';

initialiseFirebase(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
