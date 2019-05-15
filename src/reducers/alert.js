import { SHOW_ALERT, HIDE_ALERT } from '../actionType';

const defaultData = {
  open: false,
  title: 'Confirmation',
  text: 'Are you sure, you want to perform this operation?',
  agree: 'Yes',
  disagree: 'No',
  handleClose: () => {},
  handleSuccess: () => {}
};

const alert = (state = defaultData, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...defaultData, ...action.data, open: true };
    case HIDE_ALERT:
      return defaultData;
    default:
      return state;
  }
};

export default alert;
