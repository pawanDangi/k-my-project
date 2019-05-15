import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCookies } from '../actions';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  login = async (email, password) => {
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
  setCookies: cookies => dispatch(addCookies(cookies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
