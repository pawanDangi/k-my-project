import { background, primary, text, secondary } from '../utils/colors';

const styles = theme => ({
  root: {
    textAlign: 'center',
    '& div': {
      background: background.paper,
    },
  },
  page: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
    margin: '50px 5px',
    borderRadius: 10,
    padding: '0 !important',
    display: 'inline-block',
  },
  heading: {
    color: secondary.main,
    background: primary.dark,
    borderRadius: '10px 10px 0px 0px',
    padding: '20px 0',
  },
  form: {
    padding: '10px 0px',
    display: 'grid',
  },
  textField: {
    margin: theme.spacing.unit,
  },
  link: {
    margin: theme.spacing.unit,
  },
  login: {
    margin: theme.spacing.unit,
    lineHeight: '35px',
    color: primary.dark,
    background: secondary.main,
    '&:hover': {
      background: secondary.dark,
    },
  },
  or: {
    width: '100%',
    textAlign: 'center',
    borderBottom: `1px solid ${text.disabled}`,
    lineHeight: '0.1em',
    margin: '10px 0 20px',
    paddingTop: '15px',
    fontSize: '15px',
    '& span': {
      background: '#fff',
      color: `${text.disabled}`,
      padding: '0 10px',
    },
  },
  demo: {
    margin: theme.spacing.unit,
    lineHeight: '35px',
    marginTop: '8px',
    color: secondary.main,
    border: `1px solid ${secondary.main}`,
    '&:hover': {
      color: secondary.dark,
      border: `1px solid ${secondary.dark}`,
    },
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

export default styles;
