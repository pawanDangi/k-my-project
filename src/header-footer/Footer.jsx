import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core/';

import { primary } from '../utils/colors';

const styles = {
  appBar: {
    display: 'flex',
    flexDirection: 'column',
    height: '25px',
    alignItems: 'flex-end',
    background: primary.dark,
    padding: '2px 5px',
    fontSize: '12px',
    '& div': {
      background: primary.main
    }
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <AppBar position="absolute" className={classes.appBar}>
      &#9400; Copyright {moment().format('YYYY')} Intertrust Technologies
      Corporation. All rights reserved.
    </AppBar>
  );
}

/* eslint react/forbid-prop-types: 0 */
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
