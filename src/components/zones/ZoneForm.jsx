import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core/';
import { Close as CloseIcon } from '@material-ui/icons/';
import { find } from 'lodash';

import Autocomplete from '../Autocomplete';
import styles from '../../css/zone-form';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(),
    top: theme.spacing(),
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(),
  },
}))(MuiDialogActions);

const zoneTypes = [
  {
    label: 'Freestyle',
    value: 'Freestyle',
  },
  {
    label: 'Nano',
    value: 'Nano',
  },
  {
    label: 'KVA',
    value: 'KVA',
  },
];

class ZoneForm extends React.Component {
  state = {
    zoneName: '',
    applianceType: '',
    description: '',
    formType: 'create',
    error: {},
  };

  componentWillReceiveProps(props) {
    const { zoneDetails, type } = props;
    if (Object.keys(zoneDetails || {}).length) {
      const { id, zoneName, description } = zoneDetails;
      let { applianceType } = zoneDetails;
      applianceType = applianceType
        ? find(
            zoneTypes,
            zType => zType.value.toLowerCase() === applianceType.toLowerCase()
          )
        : '';
      this.setState({
        id,
        zoneName,
        applianceType,
        description,
        formType: type,
      });
    } else {
      this.setState({
        zoneName: '',
        applianceType: '',
        description: '',
        formType: type,
      });
    }
  }

  handleChange = key => e => {
    const { value } = e.target;
    this.setState({ [key]: value }, () => {
      if (key === 'zoneName') {
        if (value) {
          this.setState({
            error: {},
          });
        } else {
          this.setState({
            error: { type: 'name', message: 'Name is required.' },
          });
        }
      }
    });
  };

  handleType = applianceType => {
    this.setState({ applianceType });
    if (applianceType) {
      this.setState({ error: {} });
    }
  };

  onSave = data => {
    if (!data.zoneName || !/^[a-zA-Z0-9_]+$/.test(data.zoneName)) {
      this.setState({ error: { type: 'name', message: 'Invalid Name.' } });
      return;
    }
    if (!data.applianceType) {
      this.setState({ error: { type: 'type', message: 'Select an option.' } });
      return;
    }
    const { onSave } = this.props;
    onSave(data);
  };

  onCancel = () => {
    const { onCancel } = this.props;
    this.setState({ error: {} }, () => {
      onCancel();
    });
  };

  render() {
    const { open, onDelete, classes } = this.props;
    const {
      zoneName,
      applianceType,
      description,
      formType,
      id,
      error,
    } = this.state;
    return (
      <div>
        <Dialog
          onClose={this.onCancel}
          aria-labelledby="customized-dialog-title"
          open={open}
          classes={{ paper: classes.paper }}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.onCancel}>
            <Typography variant="h6" className={classes.title}>
              {formType === 'edit' ? 'Edit' : 'Create'} Zone
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Zone is a group of Appliances with same content.
            </Typography>
          </DialogTitle>
          <DialogContent>
            <TextField
              required
              fullWidth
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
              id="zone-name"
              error={error.type === 'name'}
              value={zoneName}
              onChange={this.handleChange('zoneName')}
              label="Name"
              margin="dense"
              variant="outlined"
              helperText={error.type === 'name' ? error.message : ''}
            />
            <Autocomplete
              required
              disabled={formType === 'edit'}
              error={error.type === 'type'}
              label="Type"
              options={zoneTypes}
              selected={applianceType}
              onSelect={this.handleType}
              errorHelperText={error.type === 'type' ? error.message : ''}
            />
            <TextField
              fullWidth
              multiline
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
              id="zone-description"
              value={description}
              onChange={this.handleChange('description')}
              label="Description"
              rows="4"
              margin="normal"
              variant="outlined"
            />
            <DialogActions>
              {formType === 'edit' ? (
                <Button
                  variant="contained"
                  onClick={() => onDelete(id)}
                  color="secondary"
                  className={classes.delete}
                >
                  Delete
                </Button>
              ) : (
                ''
              )}
              <Button
                variant="contained"
                onClick={() =>
                  formType === 'edit'
                    ? this.onSave({
                        id,
                        zoneName,
                        applianceType: applianceType.value,
                        description,
                      })
                    : this.onSave({
                        zoneName,
                        applianceType: applianceType.value,
                        description,
                      })
                }
                className={classes.save}
              >
                Save
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

ZoneForm.defaultProps = {
  open: false,
  onSave: () => {},
  onDelete: () => {},
  onCancel: () => {},
  zoneDetails: {},
  type: 'create',
};

ZoneForm.propTypes = {
  open: PropTypes.bool,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  zoneDetails: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles)(ZoneForm);
