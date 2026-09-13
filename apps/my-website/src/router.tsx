import { Route, Switch } from 'wouter';
import { HomePage } from 'pages/homePage/homePage.tsx';

export const Router = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
