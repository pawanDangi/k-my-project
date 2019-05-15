import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import AppHeader from './header-footer/HeaderFooter';
import Login from './containers/Login';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import VerifyPassword from './containers/VerifyPassword';
import ContactUs from './containers/ContactUs';
import Dashboard from './containers/Dashboard';

const PrivateRoute = ({ component: Component, cookies, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      cookies && cookies.epasso ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const Routes = ({ cookies }) => {
  return (
    <Router>
      <AppHeader>
        <Router>
          <Switch>
            <Route
              exect
              path="/login"
              render={props =>
                !(cookies && cookies.epasso) ? (
                  <Login {...props} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/verify-password" component={VerifyPassword} />
            <Route exact path="/contact-us" component={ContactUs} />
            <PrivateRoute
              exect
              cookies={cookies}
              path="/dashboard"
              component={Dashboard}
            />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </Router>
      </AppHeader>
    </Router>
  );
};

const mapStateToProps = state => ({
  cookies: state.cookies
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
