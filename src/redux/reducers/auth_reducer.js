'use strict';

let initialState = {
  isLoading: false,
  isLogin: false,
  isFailure: false,
  message: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        isLoading: true,
        message: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        isLoading: false,
        isLogin: true,
        message: 'Login Success',
      };
    case 'LOGIN_FAILURE':
      return {
        isLoading: false,
        isFailure: true,
        message: 'Username or password incorrect',
      };
    case 'LOGOUT_REQUEST':
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};
