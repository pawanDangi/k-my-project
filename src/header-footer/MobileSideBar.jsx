import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core/';

import AppPages from './AppPages';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    display: 'grid',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

function MobileSideBar(props) {
  const { classes, handleDrawer, open } = props;
  return (
    <Drawer
      open={open}
      onClose={handleDrawer}
      className={classNames(classes.drawer, classes.drawerOpen)}
      classes={{
        paper: classNames(classes.drawerOpen)
      }}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={handleDrawer}
        onKeyDown={handleDrawer}
      >
        <AppPages isMobile />
      </div>
    </Drawer>
  );
}

/* eslint react/forbid-prop-types: 0 */
MobileSideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileSideBar);
