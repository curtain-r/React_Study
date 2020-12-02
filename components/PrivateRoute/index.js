import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../src/components/PrivateRoute/node_modules/@/utils/session';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={(props) => (
      isAuthenticated()
      ? <Component {...props} />
      : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}></Redirect>
      )
    )}
  >

  </Route>
)

export default PrivateRoute;