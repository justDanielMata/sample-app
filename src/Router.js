import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PATHS } from './Utils/constants';
import Login from './Views/Login/Login';
import Dashboard from './Views/Dashboard/Dashboard';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path={PATHS.LOGIN} component={Login}></Route>
      <Route path={PATHS.DASHBOARD} component={Dashboard}></Route>
    </Switch>
  </Router>
);

export default AppRouter;
