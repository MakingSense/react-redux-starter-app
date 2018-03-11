import { push } from 'react-router-redux';
import * as types from '../constants/actionTypes';
import * as authService from '../services/authService';

export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user
  };
}

export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    message: error
  };
}

export function login(username, password) {
  return function (dispatch) {
    dispatch(loginRequest());
    return authService.login(username, password)
      .then(
        response => {
          dispatch(loginSuccess(response));
          dispatch(push('/'));
        },
        error => dispatch(loginError(error))
      );
  };
}
