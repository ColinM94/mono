import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch } from 'wouter';
import { initialiseFirebase } from '@mono/firebase';

import { NotFoundPage } from 'pages/notFoundPage/notFoundPage';
import { firebaseConfig } from 'constants/config';
import { HomePage } from 'pages/homePage/homePage';

import './styles/global.scss';

initialiseFirebase(firebaseConfig);

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
