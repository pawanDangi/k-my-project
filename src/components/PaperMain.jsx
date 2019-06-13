import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/';

const styles = theme => ({
  root: {
    '& div': {
      background: '#fff',
    },
  },
  page: {
    ...theme.mixins.gutters(),
    width: '98%',
    margin: '0 1%',
    padding: '10px !important',
  },
});

class PaperMain extends Component {
  state = {};

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          {children}
        </Paper>
      </div>
    );
  }
}

/* eslint react/forbid-prop-types: 0 */
PaperMain.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default withStyles(styles)(PaperMain);
