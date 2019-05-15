import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button, Chip } from '@material-ui/core/';
import FaceIcon from '@material-ui/icons/Face';

import { background, primary } from '../utils/colors';

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
    marginTop: 50,
    borderRadius: 10,
    padding: '10 !important',
    display: 'inline-block'
  },
  heading: {
    color: primary.main,
    padding: '20px 0',
    borderBottom: '3px solid'
  },
  chip: {
    fontSize: '20px',
    border: '1px solid',
    marginTop: '20px'
  },
  sugg: {
    padding: '22px 0px',
    fontWeight: '500',
    fontSize: '16px'
  },
  form: {
    padding: '10px 0px',
    display: 'grid',
    width: '100%'
  },
  textField: {
    margin: '10px 0px'
  },
  verify: {
    margin: '10px 0px',
    lineHeight: '35px',
    background: primary.main,
    '&:hover': {
      background: primary.dark
    }
  }
});

class ForgotPasswordForm extends Component {
  state = {
    password: 'abc'
  };

  render() {
    const { classes, verify } = this.props;
    const { password } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Verify Password
          </Typography>
          <Chip
            icon={<FaceIcon />}
            label="admin@yupptv.com"
            className={classes.chip}
          />
          <Typography variant="h3" component="p" className={classes.sugg}>
            To continue, first verify that it’s you.
          </Typography>
          <form className={classes.form} autoComplete="off">
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
            <Button
              variant="contained"
              color="primary"
              className={classes.verify}
              onClick={e => verify(password)}
            >
              Next
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ForgotPasswordForm);
