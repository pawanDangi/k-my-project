import { ADD_LOADER, REMOVE_LOADER } from '../actionType';

export const addLoader = status => ({
  type: ADD_LOADER,
  status,
});

export const removeLoader = () => ({
  type: REMOVE_LOADER,
});
