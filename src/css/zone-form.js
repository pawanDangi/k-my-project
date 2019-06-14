const styles = () => ({
  paper: {
    width: '40%',
    maxWidth: '40%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  title: {
    fontWeight: 400,
    fontSize: '30px',
  },
  subTitle: {
    fontSize: '14px',
    color: 'gray',
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
  save: {
    background: '#000',
    color: '#FFC000',
    textTransform: 'none',
    fontSize: '16px',
    '&:hover': {
      textDecoration: 'none',
      color: '#FFC000',
      backgroundColor: '#000',
    },
  },
  delete: {
    textTransform: 'none',
    fontSize: '16px',
  },
});

export default styles;
