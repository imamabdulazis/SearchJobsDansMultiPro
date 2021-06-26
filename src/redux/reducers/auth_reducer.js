'use strict';

let initialState = {
  isLoading: false,
  isLogin: false,
  isFailure: false,
  message: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        isLoading: true,
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
    default:
      return state;
  }
};
