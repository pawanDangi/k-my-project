import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = () => ({
  root: {
    width: '100%'
  },
  summary: {
    backgroundColor: '#f5f5f5',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
  }
});

class Panel extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes, panel, children } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === panel}
          onChange={this.handleChange(panel)}
        >
          <ExpansionPanelSummary
            classes={{ root: classes.summary }}
            expandIcon={<ExpandMoreIcon />}
          >
            {children[0]}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{children[1]}</ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

/* eslint react/forbid-prop-types: 0 */
Panel.propTypes = {
  classes: PropTypes.object.isRequired,
  panel: PropTypes.string.isRequired
};

export default withStyles(styles)(Panel);
