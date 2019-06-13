import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core/';
import { withRouter } from 'react-router';

import { background } from '../utils/colors';
import Header from './Header';
import DesktopSideBar from './DesktopSideBar';
import MobileSideBar from './MobileSideBar';
import Footer from './Footer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexGrow: 1,
    '& div': {
      background: background.default,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    marginBottom: '20px',
    ...theme.mixins.toolbar,
  },
  footer: {
    position: 'relative',
  },
  desktopSideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileSideBar: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class AppHeader extends React.Component {
  state = {
    open: false,
    minHeight: `${window.innerHeight - 50}px`,
  };

  componentWillMount() {
    this.updateHeight();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight = () => {
    const minHeight = `${window.innerHeight - 26}px`;
    this.setState({ minHeight });
  };

  handleDrawer = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { classes, children, cookies } = this.props;
    const { open, minHeight } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header open={open} handleDrawer={this.handleDrawer} />
        {cookies && cookies.epasso ? (
          <React.Fragment>
            <div className={classes.desktopSideBar}>
              <DesktopSideBar open={open} />
            </div>
            <div className={classes.mobileSideBar}>
              <MobileSideBar open={open} handleDrawer={this.handleDrawer} />
            </div>
          </React.Fragment>
        ) : (
          ''
        )}
        <main className={classes.content}>
          <div style={{ minHeight }}>
            <div className={classes.toolbar} />
            <Typography component="div">{children}</Typography>
          </div>
          <div className={classes.footer}>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}
/* eslint react/forbid-prop-types: 0 */
AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  cookies: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cookies: state.cookies,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false,
  }
)(withStyles(styles)(withRouter(AppHeader)));
