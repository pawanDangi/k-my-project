import { combineReducers } from 'redux';
import cookies from './cookies';
import loader from './loader';
import snackbar from './snackbar';
import alert from './alert';

export default combineReducers({
  cookies,
  loader,
  snackbar,
  alert
});
