import * as React from 'react';
import ReactDOM from 'react-dom/client';
import '@mono/ui/global.css';

import { Router } from './router.tsx';
import './styles/vars.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
