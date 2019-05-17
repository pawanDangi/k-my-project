import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core/";
import { Menu as MenuIcon } from "@material-ui/icons/";

import { primary } from "../utils/colors";
import kioraLogo from "../icons/Kiora_Logo.png";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: primary.dark,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolBar: {
    padding: "0px 2px"
  },
  menuButton: {
    margin: 0,
    cursor: "pointer",
    "&:focus": {
      outline: "none"
    }
  },
  logo: {
    width: "115px"
  }
});

const Header = ({ classes, open, handleDrawer, cookies }) => (
  <AppBar
    position="fixed"
    className={classNames(classes.appBar, {
      [classes.appBarShift]: open
    })}
  >
    <Toolbar className={classes.toolBar}>
      {cookies && cookies.epasso ? (
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawer}
          className={classNames(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        ""
      )}
      <Typography color="inherit">
        <img
          alt="Header Icon"
          src={kioraLogo}
          className={classes.logo}
          style={{ paddingLeft: cookies && cookies.epasso ? 0 : "10px" }}
        />
      </Typography>
    </Toolbar>
  </AppBar>
);

/* eslint react/forbid-prop-types: 0 */
Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cookies: state.cookies
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false
  }
)(withStyles(styles)(Header));
