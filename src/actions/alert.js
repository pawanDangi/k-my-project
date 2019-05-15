import { SHOW_ALERT, HIDE_ALERT } from '../actionType';

export const showAlert = data => ({
  type: SHOW_ALERT,
  data
});

export const removeAlert = () => ({
  type: HIDE_ALERT
});
