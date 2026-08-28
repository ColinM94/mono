import { Route, Switch } from 'wouter';
import { HomePage } from 'pages/homePage/homePage.tsx';
import { SettingsPage } from 'pages/settingsPage/settingsPage.tsx';

export const Router = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>

      <Route path="/Settings">
        <SettingsPage />
      </Route>
    </Switch>
  );
};
