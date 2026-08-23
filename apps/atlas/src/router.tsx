import * as React from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { onAuthStateChanged, signInWithEmailLink } from '@mono/firebase/auth';

import { LoginPage } from 'pages/loginPage/loginPage.tsx';
import { NotFoundPage } from 'pages/notFoundPage/notFoundPage.tsx';
import { sections as sectionsObject } from 'constants/sections.ts';

const sections = Object.values(sectionsObject);

export const Router = () => {
  const [location, navigate] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAuthInitialised, setIsAuthInitialised] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setIsLoggedIn(Boolean(user));
      setIsAuthInitialised(true);
    });

    return () => unsubscribe?.();
  }, []);

  React.useEffect(() => {
    if (!isAuthInitialised) return;

    if (isLoggedIn && location === '/') {
      navigate(`/${sections[0]?.id}`);
    } else if (!isLoggedIn && location !== '/') {
      navigate('/');
    }
  }, [isAuthInitialised, isLoggedIn, location, navigate]);

  React.useEffect(() => {
    signInWithEmailLink();
  }, []);

  if (!isAuthInitialised) return null;

  return (
    <Switch>
      {isLoggedIn &&
        sections.map((section) => {
          const Component = section.component;

          return (
            <Route key={section.id} path={`/${section.id}`}>
              <Component />
            </Route>
          );
        })}

      <Route path="/">
        <LoginPage />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};
