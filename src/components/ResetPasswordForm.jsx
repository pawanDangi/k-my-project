import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography, Button } from "@material-ui/core/";

import { background, primary, secondary } from "../utils/colors";

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
    margin: "50px 5px",
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
  form: {
    padding: "10px 0px",
    display: "grid"
  },
  textField: {
    margin: theme.spacing.unit
  },
  sugg: {
    padding: "22px 0px",
    fontWeight: "500",
    fontSize: "16px"
  },
  submit: {
    margin: theme.spacing.unit,
    lineHeight: "35px",
    color: primary.dark,
    background: secondary.main,
    "&:hover": {
      background: secondary.dark
    }
  }
});

class ResetPasswordForm extends Component {
  state = {
    oldPassword: "abc",
    newPassword: "xyz"
  };

  render() {
    const { classes, reset, email } = this.props;
    const { oldPassword, newPassword } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Reset Password
          </Typography>
          <Typography variant="h3" component="p" className={classes.sugg}>
            Please enter a new password for your Kiora account associated with
            email <b>{email}</b>.
          </Typography>
          <form className={classes.form} autoComplete="off">
            <TextField
              id="outlined-old-password-input"
              label="Old Password"
              className={classes.textField}
              type="password"
              margin="normal"
              variant="outlined"
              value={oldPassword}
            />
            <TextField
              id="outlined-new-password-input"
              label="Old Password"
              className={classes.textField}
              type="password"
              margin="normal"
              variant="outlined"
              value={newPassword}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => reset(oldPassword, newPassword)}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ResetPasswordForm);
