import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Typography, Button } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';

import styles from '../css/login-form';

const LoginForm = ({ classes, login }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorType, setErrorType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (errorType === 'userName' && userName) {
      setErrorType('');
      setErrorMessage(``);
    }
  }, [userName, errorType]);

  useEffect(() => {
    if (errorType === 'password' && password) {
      setErrorType('');
      setErrorMessage(``);
    }
  }, [password, errorType]);

  const onSubmit = () => {
    if (!userName) {
      setErrorType('userName');
      setErrorMessage(`Username can't be empty.`);
      return;
    }
    if (!password) {
      setErrorType('password');
      setErrorMessage(`Password can't be empty.`);
      return;
    }
    login(userName, password);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.page} elevation={1}>
        <Typography variant="h5" component="h3" className={classes.heading}>
          Sign In
        </Typography>
        <form className={classes.form} autoComplete="on">
          <TextField
            error={errorType === 'userName'}
            helperText={errorType === 'userName' ? errorMessage : ''}
            id="outlined-userName-input"
            label="User Name"
            className={classes.textField}
            type="userName"
            name="userName"
            autoComplete="userName"
            margin="normal"
            variant="outlined"
            autoFocus
            value={userName}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={e => setUserName(e.target.value)}
          />

          <TextField
            error={errorType === 'password'}
            helperText={errorType === 'password' ? errorMessage : ''}
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            value={password}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={e => setPassword(e.target.value)}
          />
          <NavLink to="/forgot-password" className={classes.link}>
            Forgot password?
          </NavLink>
          <Button
            variant="contained"
            color="primary"
            className={classes.login}
            onClick={() => onSubmit()}
          >
            Login
          </Button>
          <h2 className={classes.or}>
            <span>OR</span>
          </h2>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.demo}
          >
            Request Demo
          </Button>
        </form>
      </Paper>
    </div>
  );
};

/* eslint react/forbid-prop-types: 0 */
LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);
