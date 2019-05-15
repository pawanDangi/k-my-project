import store from '../store';
import { showSnackbar } from '../actions';

const snackbar = data => {
  store.dispatch(showSnackbar(data));
};

export default snackbar;
