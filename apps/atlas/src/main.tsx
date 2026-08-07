import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch, useLocation } from 'wouter';
import { onAuthStateChanged } from '@mono/firebase/auth';
import { initialiseFirebase } from '@mono/firebase';

import { NotFoundPage } from 'pages/notFoundPage/notFoundPage';
import { HomePage } from 'pages/homePage/homePage';
import { sections as sectionsObject } from 'constants/sections';
import { LoginPage } from 'pages/loginPage/loginPage';
import { firebaseConfig } from 'constants/config';

import './styles/global.scss';

initialiseFirebase(firebaseConfig);

export const App = () => {
  const [location, navigate] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const sections = Object.values(sectionsObject);
  const firstSection = sections[0];

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setIsLoggedIn(Boolean(user?.uid));
    });

    return () => unsubscribe?.();
  }, []);

  React.useEffect(() => {
    const noAuthRoutes = ['/', '/login'];

    if (isLoggedIn && noAuthRoutes.includes(location)) navigate(`/${firstSection?.id}`);
    if (!isLoggedIn && !noAuthRoutes.includes(location)) navigate('/');
  }, [isLoggedIn, location, firstSection?.id, navigate]);

  return (
    <>
      <Switch>
        {Object.values(sections).map((section) => {
          const Component = section.component;

          return (
            <Route key={section.id} path={`/${section.id}`}>
              <Component />
            </Route>
          );
        })}

        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/login">
          <LoginPage />
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
