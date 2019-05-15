import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actionType';

export const showSnackbar = data => ({
  type: SHOW_SNACKBAR,
  data
});

export const removeSnackbar = () => ({
  type: HIDE_SNACKBAR
});
