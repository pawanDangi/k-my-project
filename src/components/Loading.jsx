import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Dialog } from '@material-ui/core/';
import { connect } from 'react-redux';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    background: 'transparent',
  },
  center: {
    textAlign: 'center',
  },
  dialog: {
    background: 'transparent',
    padding: 0,
    margin: 0,
    boxShadow: 'none',
  },
});

class Loading extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes, loader } = this.props;
    const { completed } = this.state;
    return (
      <div className={classes.center}>
        <Dialog open={loader} classes={{ paper: classes.dialog }}>
          <CircularProgress
            className={classes.progress}
            variant="determinate"
            size={50}
            value={completed}
          />
        </Dialog>
      </div>
    );
  }
}

/* eslint react/forbid-prop-types: 0 */
Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  loader: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loader: state.loader,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Loading));
