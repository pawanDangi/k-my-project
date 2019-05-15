import { ADD_COOKIES, REMOVE_COOKIES } from '../actionType';

export const addCookies = cookies => ({
  type: ADD_COOKIES,
  cookies
});

export const removeCookies = () => ({
  type: REMOVE_COOKIES
});
