import store from '../store';
import { addLoader } from '../actions';

const loader = status => {
  store.dispatch(addLoader(status));
};

export default loader;
