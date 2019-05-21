import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core/";
import { NavLink } from "react-router-dom";

import { background, primary, secondary, text } from "../utils/colors";

const styles = theme => ({
  root: {
    textAlign: "center",
    "& div": {
      background: background.paper
    }
  },
  page: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.down("xs")]: {
      width: "90%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "60%"
    },
    [theme.breakpoints.up("md")]: {
      width: "40%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%"
    },
    marginTop: 50,
    borderRadius: 10,
    padding: "0 !important",
    display: "inline-block"
  },
  heading: {
    color: secondary.main,
    background: primary.dark,
    borderRadius: "10px 10px 0px 0px",
    padding: "20px 0"
  },
  text: {
    padding: "22px 0px",
    margin: "10px"
  },
  sugg: {
    padding: "22px 0px",
    fontWeight: "500",
    fontSize: "16px",
    margin: "10px"
  },
  info: {
    padding: "22px 0px",
    fontSize: "16px",
    color: text.disabled,
    margin: "10px"
  },
  link: {
    padding: "22px 0px",
    textAlign: "left",
    margin: "10px"
  }
});

class ForgotMessage extends Component {
  state = {};

  render() {
    const { classes, email } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Forgot Password ?
          </Typography>
          <Typography variant="h5" component="h3" className={classes.text}>
            Check your email
          </Typography>
          <Typography variant="h3" component="p" className={classes.sugg}>
            We have sent an email to <b>{email}</b>. Click the link in the email
            to reset your password.
          </Typography>
          <Typography variant="h3" component="p" className={classes.info}>
            If you don't see the email, check other places it might be in, like
            your junk, spam, social, or other folders.
          </Typography>
          <div className={classes.link}>
            <NavLink to={"/forgot-password"}>
              I didn't receive the email
            </NavLink>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ForgotMessage);
