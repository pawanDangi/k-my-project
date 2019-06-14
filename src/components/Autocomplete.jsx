/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '15px',
    '& input': {
      marginLeft: '8px',
    },
  },
  rootDisable: {
    flexGrow: 1,
    marginTop: '15px',
    '& input': {
      marginLeft: '8px',
    },
    pointerEvents: 'none',
    opacity: 0.4,
  },
  input: {
    display: 'flex',
    padding: '10px',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing() / 2}px ${theme.spacing() / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
  },
  singleValue: {
    position: 'absolute',
    left: 14,
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 14,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    marginTop: theme.spacing(),
    left: 0,
    right: 0,
    zIndex: 999,
  },
  divider: {
    height: theme.spacing(2),
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'rgba(255, 193, 7, 1)',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'rgba(255, 193, 7, 1)',
    },
  },
  cssFocused: {},
  notchedOutline: {},
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const {
    InputProps: { classes },
    ...rest
  } = props.selectProps.textFieldProps;
  return (
    <TextField
      variant="outlined"
      fullWidth
      InputProps={{
        classes,
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...rest}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    multi: null,
  };

  componentWillMount() {
    const { selected, isMulti } = this.props;
    if (isMulti) {
      this.setState({ multi: selected });
    } else {
      this.setState({ single: selected });
    }
  }

  componentWillReceiveProps(props) {
    const { selected, isMulti } = props;
    if (isMulti) {
      this.setState({ multi: selected });
    } else {
      this.setState({ single: selected });
    }
  }

  handleChange = name => value => {
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { onSelect } = this.props;
        onSelect(this.state[name]);
      }
    );
  };

  render() {
    const {
      classes,
      theme,
      isMulti,
      options,
      placeholder,
      label,
      required,
      error,
      errorHelperText,
      disabled,
    } = this.props;

    const rootClass = disabled ? classes.rootDisable : classes.root;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className={rootClass}>
        <NoSsr>
          {isMulti ? (
            <Select
              classes={classes}
              styles={selectStyles}
              textFieldProps={{
                label,
                required,
                error,
                helperText: error ? errorHelperText : '',
                InputLabelProps: {
                  shrink: true,
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                },
                InputProps: {
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                },
              }}
              options={options}
              components={components}
              value={this.state.multi}
              onChange={this.handleChange('multi')}
              placeholder={placeholder || 'Select multiple values'}
              isMulti
            />
          ) : (
            <Select
              classes={classes}
              styles={selectStyles}
              textFieldProps={{
                label,
                required,
                error,
                helperText: error ? errorHelperText : '',
                InputLabelProps: {
                  shrink: true,
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                },
                InputProps: {
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                },
              }}
              options={options}
              components={components}
              value={this.state.single}
              onChange={this.handleChange('single')}
              placeholder={placeholder || 'Search a value'}
              isClearable
            />
          )}
        </NoSsr>
      </div>
    );
  }
}

IntegrationReactSelect.defaultProps = {
  isMulti: false,
};

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isMulti: PropTypes.bool,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.any,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  errorHelperText: PropTypes.string,
  disabled: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);
