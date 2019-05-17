import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import AppHeader from "./header-footer/HeaderFooter";
import Login from "./containers/Login";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import VerifyPassword from "./containers/VerifyPassword";
import ContactUs from "./containers/ContactUs";
import Dashboard from "./containers/Dashboard";
import Zones from "./containers/Zones";
import Appliances from "./containers/Appliances";
import Content from "./containers/Content";
import Analytics from "./containers/Analytics";

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

const Routes = ({ cookies }) => (
  <Router>
    <AppHeader>
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
        <PrivateRoute exect cookies={cookies} path="/zones" component={Zones} />
        <PrivateRoute
          exect
          cookies={cookies}
          path="/appliances"
          component={Appliances}
        />
        <PrivateRoute
          exect
          cookies={cookies}
          path="/content"
          component={Content}
        />
        <PrivateRoute
          exect
          cookies={cookies}
          path="/analytics"
          component={Analytics}
        />
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </AppHeader>
  </Router>
);

const mapStateToProps = state => ({
  cookies: state.cookies
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false
  }
)(Routes);
