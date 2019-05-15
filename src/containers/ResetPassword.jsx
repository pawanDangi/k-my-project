import React, { Component } from 'react';
import ResetPasswordForm from '../components/ResetPasswordForm';

class ResetPassword extends Component {
  state = {
    email: 'abc'
  };

  reset = (oldPassword, newPassword) => {
    console.log(oldPassword, newPassword);
  };

  render() {
    const { email } = this.state;

    return <ResetPasswordForm reset={this.reset} email={email} />;
  }
}

export default ResetPassword;
