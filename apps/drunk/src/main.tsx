import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { initialiseFirebase } from '@mono/firebase/initialise';
import '@mono/ui/global.css';

import { firebaseConfig } from 'constants/configs.ts';
import { Router } from './router.tsx';
import './styles/vars.css';

initialiseFirebase(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
