import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import {
  Home as HomeIcon,
  Settings as SettingIcon,
  MovieCreation as ContentIcon,
  TrendingUp as AnalyticsIcon,
  Router as AppliancesIcon,
  Business as ZoneIcon,
} from '@material-ui/icons/';

import { background, common, text } from '../utils/colors';

const pages = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    icon: <HomeIcon style={{ fontSize: 30 }} />,
  },
  {
    text: 'Zones',
    path: '/zones',
    icon: <ZoneIcon style={{ fontSize: 30 }} />,
  },
  {
    text: 'Appliances',
    path: '/appliances',
    icon: <AppliancesIcon style={{ fontSize: 30 }} />,
  },
  {
    text: 'Content',
    path: '/content',
    icon: <ContentIcon style={{ fontSize: 30 }} />,
  },
  {
    text: 'Analytics',
    path: '/analytics',
    icon: <AnalyticsIcon style={{ fontSize: 30 }} />,
  },
  {
    text: 'Setting',
    path: '/setting',
    isBottom: true,
    icon: <SettingIcon style={{ fontSize: 30 }} />,
  },
];

const styles = {
  list: {
    height: '100%',
    background: background.paper,
  },
  link: {
    letterSpacing: '1px',
    display: 'flex',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  text: {
    paddingTop: '4px',
  },
  setting: {
    position: 'absolute',
    borderTop: `1px solid ${text.disabled}`,
  },
  desktop: {
    bottom: '70px',
  },
  mobile: {
    bottom: '5px',
  },
  bold: {
    fontWeight: 'bold',
  },
};

const AppPages = ({ classes, location, isMobile }) => (
  <List className={classes.list}>
    {pages.map(page => (
      <ListItem
        button
        key={page.text}
        className={classNames({
          [classes.setting]: page.isBottom,
          [classes.desktop]: page.isBottom && !isMobile,
          [classes.mobile]: page.isBottom && isMobile,
        })}
      >
        <NavLink to={page.path} className={classNames(classes.link)}>
          <ListItemIcon
            style={{
              color: location.pathname === page.path ? common.black : '',
            }}
          >
            {page.icon}
          </ListItemIcon>
          <ListItemText
            className={classes.text}
            classes={{
              primary: location.pathname === page.path ? classes.bold : '',
            }}
            primary={page.text}
          />
        </NavLink>
      </ListItem>
    ))}
  </List>
);

AppPages.defaultProps = {
  isMobile: false,
};

/* eslint react/forbid-prop-types: 0 */
AppPages.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  isMobile: PropTypes.bool,
};

export default withStyles(styles)(withRouter(props => <AppPages {...props} />));
