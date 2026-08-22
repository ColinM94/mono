import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { initialiseFirebase } from '@mono/firebase/initialise.ts';

import { firebaseConfig } from 'constants/config.ts';

import { Router } from './router.tsx';
import './styles/global.css';
import './styles/ui.css';

initialiseFirebase(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
