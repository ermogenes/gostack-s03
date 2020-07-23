import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/repository/:repository+" component={Repository} />
    <Route exact path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
