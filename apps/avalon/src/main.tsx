import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch } from 'wouter';
import { initialiseFirebase } from '@mono/firebase/initialise.ts';
import { getDocumentSnapshot, setDocument } from '@mono/firebase/firestore.ts';

import type { User } from 'types/user';
import { useAppStore } from 'stores/useAppStore/useAppStore.ts';
import { Splash } from 'components/splash/splash.ts';
import { Toast } from 'components/toast/toast.ts';
import { InvalidPage } from 'pages/invalidPage/invalidPage.ts';
import { CharactersPage } from 'pages/charactersPage/charactersPage.ts';
import { JoinPage } from 'pages/joinPage/joinPage.ts';
import { MainMenuPage } from 'pages/mainMenu/mainMenuPage.ts';
import { PlayPage } from 'pages/playPage/playPage.ts';
import { RulesPage } from 'pages/rulesPage/rulesPage.ts';
import { firebaseConfig } from 'constants/config.ts';
import { initIcons } from 'constants/icons.ts';

import 'styles/global.scss';

initialiseFirebase(firebaseConfig);
initIcons();

export const App = () => {
  const { user, updateAppStore } = useAppStore();

  React.useEffect(() => {
    const unsubscribe = getDocumentSnapshot<User>({
      id: user.id,
      collection: 'users',
      callback: (value) => {
        if (!value) {
          void setDocument<{ id: string; name: string }>({
            id: user.id,
            collection: 'users',
            data: user,
          });

          return;
        }

        updateAppStore({ user: value });
        return;
      },
    });

    return () => unsubscribe?.();
  }, [user.id]);

  return (
    <>
      <Switch>
        <Route path="/">
          <MainMenuPage />
        </Route>

        <Route path="join">
          <JoinPage />
        </Route>

        <Route path="play/:sessionId">
          <PlayPage />
        </Route>

        <Route path="characters">
          <CharactersPage />
        </Route>

        <Route path="rules">
          <RulesPage />
        </Route>

        <Route path="*">
          <InvalidPage />
        </Route>
      </Switch>

      <Splash />
      <Toast />
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

// Disabled ready button still works
// Can change votes while readied up
// Show who voted yes and no for member selection.
// Make vote result dramatic.
// Quest member selection is nt being reset between chracters.
// Show chips for votes fail/win
// Hide quest votes during quest
// Host should have ready button
// List of other players on quest not working
// Remove ready buttons on screens where not needed
// Show who went on quest in quest info
// Disable fail quest button for good guys
// Remove servants from character select. Just choose special characters.
