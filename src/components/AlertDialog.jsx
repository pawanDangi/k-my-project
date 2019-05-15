import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core/';

class AlertDialog extends React.Component {
  state = {
    open: false
  };

  componentWillReceiveProps(nextProps) {
    const {
      alert: { open }
    } = nextProps;
    if (open) {
      this.setState({ open: false }, () => {
        this.setState({ open });
      });
    }
  }

  handleClose = () => {
    const {
      alert: { handleClose }
    } = this.props;
    this.setState({ open: false }, () => {
      if (handleClose) {
        handleClose();
      }
    });
  };

  handleSuccess = () => {
    const {
      alert: { handleSuccess }
    } = this.props;
    this.setState({ open: false }, () => {
      if (handleSuccess) {
        handleSuccess();
      }
    });
  };

  render() {
    const { open } = this.state;
    const {
      alert: { title, text, disagree, agree }
    } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {disagree}
            </Button>
            <Button onClick={this.handleSuccess} color="primary">
              {agree}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  alert: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    disagree: PropTypes.string.isRequired,
    agree: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertDialog);
