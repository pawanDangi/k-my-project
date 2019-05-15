import store from '../store';
import { showAlert } from '../actions';

const alert = data => {
  store.dispatch(showAlert(data));
};

export default alert;
