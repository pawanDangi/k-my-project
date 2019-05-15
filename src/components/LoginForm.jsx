import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Typography, Button } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';

import { background, primary, text, secondary } from '../utils/colors';

const styles = theme => ({
  root: {
    textAlign: 'center',
    '& div': {
      background: background.paper
    }
  },
  page: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '60%'
    },
    [theme.breakpoints.up('md')]: {
      width: '40%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%'
    },
    margin: '50px 5px',
    borderRadius: 10,
    padding: '10 !important',
    display: 'inline-block'
  },
  heading: {
    color: primary.main,
    padding: '20px 0',
    borderBottom: '3px solid'
  },
  form: {
    padding: '10px 0px',
    display: 'grid'
  },
  textField: {
    margin: theme.spacing.unit
  },
  link: {
    margin: theme.spacing.unit
  },
  login: {
    margin: theme.spacing.unit,
    lineHeight: '35px',
    background: primary.main,
    '&:hover': {
      background: primary.dark
    }
  },
  or: {
    width: '100%',
    textAlign: 'center',
    borderBottom: `1px solid ${text.disabled}`,
    lineHeight: '0.1em',
    margin: '10px 0 20px',
    paddingTop: '15px',
    fontSize: '15px',
    '& span': {
      background: '#fff',
      color: `${text.disabled}`,
      padding: '0 10px'
    }
  },
  demo: {
    margin: theme.spacing.unit,
    lineHeight: '35px',
    marginTop: '8px',
    color: secondary.main,
    border: `1px solid ${secondary.main}`,
    '&:hover': {
      color: secondary.dark,
      border: `1px solid ${secondary.dark}`
    }
  }
});

class LoginForm extends Component {
  state = {
    email: 'abc',
    password: 'xyz'
  };

  render() {
    const { classes, login } = this.props;
    const { email, password } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Sign In
          </Typography>
          <form className={classes.form} autoComplete="off">
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              autoFocus
              value={email}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              value={password}
            />
            <NavLink to={'/forgot-password'} className={classes.link}>
              Forgot password?
            </NavLink>
            <Button
              variant="contained"
              color="primary"
              className={classes.login}
              onClick={e => login(email, password)}
            >
              Login
            </Button>
            <h2 className={classes.or}>
              <span>OR</span>
            </h2>
            <Button variant="outlined" color="primary" className={classes.demo}>
              Request Demo
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
