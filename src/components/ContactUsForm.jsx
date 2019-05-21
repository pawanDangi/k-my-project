import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core/';

const styles = () => ({
  root: {
    textAlign: 'center',
    '& div': {
      background: '#fff',
    },
  },
  page: {
    marginTop: 20,
    width: '95%',
    display: 'inline-block',
    padding: '20px 10px',
  },
  contain: {
    borderRadius: '10px',
  },
  heading: {
    textAlign: 'left',
  },
  name: {
    paddingBottom: '10px',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '18px',
    paddingBottom: '15px',
    borderBottom: '1px solid',
  },
  form: {
    textAlign: 'left',
  },
});

class ForgotMessage extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          <div className={classes.contain}>
            <div className={classes.heading}>
              <Typography variant="h5" component="h3" className={classes.name}>
                Contact Us
              </Typography>
              <Typography variant="h3" component="p" className={classes.text}>
                Fill in your contact details and we will contact you shortly.
              </Typography>
            </div>
            <div className={classes.form}>hello</div>
          </div>
        </Paper>
      </div>
    );
  }
}

ForgotMessage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotMessage);
