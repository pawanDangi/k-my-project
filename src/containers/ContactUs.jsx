import React, { Component } from 'react';
import ContactUsForm from '../components/ContactUsForm';

class ContactUs extends Component {
  login = (email, password) => {
    console.log(email, password);
  };

  render() {
    return <ContactUsForm login={this.login} />;
  }
}

export default ContactUs;
