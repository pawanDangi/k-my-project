import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, TextField } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Add as AddIcon } from '@material-ui/icons/';

import styles from '../../css/zones-header';

const ZonesHeader = ({ count, action, classes, onSearch }) => (
  <div className={classes.root}>
    <div className={classes.text}>
      <Typography variant="h1" className={classes.headding}>
        Zones
      </Typography>
      <Typography>List of all Zones({count})</Typography>
    </div>
    <div className={classes.action}>
      <TextField
        id="search-zone"
        label="Search Zones..."
        className={classes.textField}
        margin="dense"
        variant="outlined"
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
        onInput={e => {
          if ((e.target.value || '').length < 50) {
            onSearch(e.target.value);
          }
          e.target.value = (e.target.value || '').toString().slice(0, 50);
        }}
      />
      <Button
        className={classes.button}
        variant="contained"
        size="small"
        onClick={() => action({ type: 'create' })}
      >
        <AddIcon className={classes.icon} />
        Create Zone
      </Button>
    </div>
  </div>
);

ZonesHeader.defaultProps = {
  count: 0,
  onSearch: () => {},
};

ZonesHeader.propTypes = {
  count: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
};

export default withStyles(styles)(ZonesHeader);
