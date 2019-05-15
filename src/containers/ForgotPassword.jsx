import React, { Component } from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import ForgotMessage from '../components/ForgotMessage';

class ForgotPassword extends Component {
  state = {
    reset: false
  };

  forgot = email => {
    this.setState({ email, reset: true });
    console.log(email);
  };

  render() {
    const { reset, email } = this.state;
    return reset ? (
      <ForgotMessage email={email} />
    ) : (
      <ForgotPasswordForm forgot={this.forgot} />
    );
  }
}

export default ForgotPassword;
