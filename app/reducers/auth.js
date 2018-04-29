import * as types from '../constants/actionTypes';
import initialState from './initialState';

function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state,
        {
          authenticating: true,
          isAuthenticated: false,
          error: false,
          errorMessage: null,
          user: null
        }
      );

    case types.LOGIN_SUCCESS:
      return Object.assign({}, state,
        {
          authenticating: false,
          isAuthenticated: true,
          error: false,
          errorMessage: null,
          user: action.user
        }
      );

    case types.LOGIN_ERROR:
      return Object.assign({}, state,
        {
          authenticating: false,
          isAuthenticated: false,
          error: true,
          errorMessage: action.message,
          user: null
        }
      );

    default:
      return state;
  }
}

export default auth;
