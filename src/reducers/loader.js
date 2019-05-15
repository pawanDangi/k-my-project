import { ADD_LOADER } from '../actionType';

const loader = (state = false, action) => {
  switch (action.type) {
    case ADD_LOADER:
      return action.status;
    default:
      return state;
  }
};

export default loader;
