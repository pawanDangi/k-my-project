import store from '../store';
import { addCookies } from '../actions';

const errorCheck = async err => {
  if (err.status === 401) {
    document.cookie = `epasso=`;
    store.dispatch(addCookies({ epasso: '' }));
  }
};

export default errorCheck;
