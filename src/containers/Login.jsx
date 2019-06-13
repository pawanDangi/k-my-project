import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addCookies } from '../actions';
import LoginForm from '../components/LoginForm';
import { postMethod } from '../api/apiMethods';
import { login } from '../api/endPoint';
import snackbar from '../utils/snackbar';

class Login extends Component {
  login = async (userName, password) => {
    const response = await postMethod(login, {
      userName,
      password,
    });
    if (response.errorMessage) {
      snackbar({ variant: 'error', message: response.errorMessage });
    } else {
      document.cookie = `epasso=${response.accessToken}`;
      const { setCookies } = this.props;
      await setCookies({ epasso: response.accessToken });
    }
  };

  render() {
    return <LoginForm login={this.login} />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setCookies: cookies => dispatch(addCookies(cookies)),
});

Login.propTypes = {
  setCookies: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
