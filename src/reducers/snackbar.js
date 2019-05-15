import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actionType';

const defaultData = {
  open: false,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  autoHideDuration: 3000,
  variant: 'success',
  message: 'This is a success message!'
};

const snackbar = (state = defaultData, action) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return { ...defaultData, ...action.data, open: true };
    case HIDE_SNACKBAR:
      return defaultData;
    default:
      return state;
  }
};

export default snackbar;
