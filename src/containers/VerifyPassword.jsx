import React, { Component } from 'react';
import VerifyPasswordForm from '../components/VerifyPasswordForm';

class VerifyPassword extends Component {
  verify = password => {
    // eslint-disable-next-line no-console
    console.log(password);
  };

  render() {
    return <VerifyPasswordForm verify={this.verify} />;
  }
}

export default VerifyPassword;
