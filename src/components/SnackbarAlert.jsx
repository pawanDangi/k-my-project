import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Close as CloseIcon,
  Warning as WarningIcon
} from '@material-ui/icons/';
import { green, amber } from '@material-ui/core/colors/';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

function MySnackbarContent(props) {
  const { classes, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant])}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.shape({
    success: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    warning: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconVariant: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class SnackbarAlert extends React.Component {
  state = {
    open: false
  };

  componentWillReceiveProps(nextProps) {
    const {
      snackbar: { open }
    } = nextProps;
    if (open) {
      this.setState({ open: false }, () => {
        this.setState({ open });
      });
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { snackbar } = this.props;
    const { anchorOrigin, autoHideDuration, variant, message } = snackbar;

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: anchorOrigin.vertical,
            horizontal: anchorOrigin.horizontal
          }}
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </div>
    );
  }
}

SnackbarAlert.defaultProps = {
  snackbar: {
    open: false,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    autoHideDuration: 3000,
    variant: 'success',
    message: 'This is a success message!'
  }
};

SnackbarAlert.propTypes = {
  snackbar: PropTypes.shape({
    open: PropTypes.bool,
    anchorOrigin: PropTypes.shape({
      vertical: PropTypes.string,
      horizontal: PropTypes.string
    }),
    autoHideDuration: PropTypes.number,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    message: PropTypes.string
  })
};

const mapStateToProps = state => ({
  snackbar: state.snackbar
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackbarAlert);
