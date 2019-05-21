import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from './components/Loading';
import SnackbarAlert from './components/SnackbarAlert';
import AlertDialog from './components/AlertDialog';
import Routes from './Routes';
import getCookies from './utils/get-cookie';
import { addCookies } from './actions';

class App extends Component {
  state = {
    wait: true,
  };

  async componentWillMount() {
    const cookies = await getCookies();
    const { setCookies } = this.props;
    await setCookies(cookies);
    this.setState({ wait: false });
  }

  render() {
    const { wait } = this.state;
    if (wait) {
      return <div />;
    }
    return (
      <div>
        <Loading />
        <SnackbarAlert />
        <AlertDialog />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setCookies: cookies => dispatch(addCookies(cookies)),
});

App.propTypes = {
  setCookies: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false,
  }
)(App);
