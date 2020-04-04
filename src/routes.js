import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Bar from './components/Bar';
 
export default function Routes() {
  return (
    <BrowserRouter>
      <Bar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
