import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import PrivateRoute from '../components/PrivateRoute';
import Index from '../pages/Index'

const getRouter = () => (
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/' component={Index} />
    </Switch>
  </Router>
)

export default getRouter;