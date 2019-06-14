const styles = () => ({
  root: {
    paddingBottom: '5px',
    display: 'flex',
  },
  text: {
    width: '30%',
  },
  headding: {
    fontSize: '32px',
    fontWeight: 'bold',
    paddingBottom: '5px',
  },
  action: {
    width: '70%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
  },
  textField: {
    width: '25%',
    margin: '0 12px 0 0',
    '& input': {
      paddingTop: '13px',
      paddingBottom: '13px',
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
  button: {
    background: '#000',
    color: '#FFC000',
    padding: '8px',
    textTransform: 'none',
    fontSize: '16px',
    '&:hover': {
      textDecoration: 'none',
      color: '#FFC000',
      backgroundColor: '#000',
    },
  },
  icon: {
    color: '#fff',
  },
});

export default styles;
