import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit
  }
});

function Chips(props) {
  const { classes, data, handleClick } = props;
  return (
    <div className={classes.root}>
      {data.map(d =>
        d.selected ? (
          <Chip
            key={`${d.id}-${d.name}`}
            label={d.name}
            className={classes.chip}
            color="primary"
            onClick={() => {
              handleClick(d);
            }}
          />
        ) : (
          <Chip
            key={`${d.id}-${d.name}`}
            label={d.name}
            className={classes.chip}
            onClick={() => {
              handleClick(d);
            }}
          />
        )
      )}
    </div>
  );
}
/* eslint react/forbid-prop-types: 0 */
Chips.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Chips);
