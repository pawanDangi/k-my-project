import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addCookies } from '../actions';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  login = async email => {
    document.cookie = `epasso=${email}`;
    const { setCookies } = this.props;
    await setCookies({ epasso: email });
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
