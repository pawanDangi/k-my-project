import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    background: 'inherit !important',
    '& div': {
      background: 'inherit !important',
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  popper: {
    zIndex: 999,
  },
  menuItem: {
    background: 'none !important',
    '&:hover': {
      background: '#f2f2f2 !important',
    },
  },
});

class ActionIteams extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleAction = (type, id) => {
    if (id && type) {
      const { action } = this.props;
      action(type, id);
    }
  };

  render() {
    const { classes, id, options } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <MoreVertIcon />
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={classes.popper}
            placement="left"
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {options.map(option => (
                        <MenuItem
                          key={option.type}
                          onClick={e => {
                            this.handleAction(option.type, id);
                            this.handleClose(e);
                          }}
                          className={classes.menuItem}
                        >
                          {option.icon}
                          {option.text}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

ActionIteams.defaultProps = {
  options: [
    {
      text: 'Edit Zone',
      type: 'edit',
      icon: (
        <EditIcon
          style={{ paddingRight: '5px', color: 'rgba(0, 0, 0, 0.54)' }}
        />
      ),
    },
  ],
};

ActionIteams.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
};

export default withStyles(styles)(ActionIteams);
