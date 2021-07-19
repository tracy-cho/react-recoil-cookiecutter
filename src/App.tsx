import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorPage } from 'components/pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={'*'} component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
