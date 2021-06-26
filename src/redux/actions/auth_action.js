import AsyncStorage from '@react-native-async-storage/async-storage';

export const authAction = (username, password) => {
  return async function (dispatch) {
    dispatch({ type: 'LOGIN_REQUEST' });
    if (username === 'user' && password === 'pass') {
      dispatch({ type: 'LOGIN_SUCCESS' });
      await AsyncStorage.setItem('isLogin', 'true');
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
};

export const checkAuth = () => {
  return async function (dispatch) {
    const isLogin = await AsyncStorage.getItem('isLogin');
    if (isLogin === 'true') {
      dispatch({ type: 'LOGIN_SUCCESS' });
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
};
