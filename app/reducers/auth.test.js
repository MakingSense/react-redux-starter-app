import reducer from './auth';
import * as types from '../constants/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    // Act.
    const result = reducer(undefined, {});

    // Assert.
    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: false,
      error: false,
      errorMessage: null,
      user: null
    });
  });

  it('should handle a login request', () => {
    // Act.
    const result = reducer([], {
      type: types.LOGIN_REQUEST
    });

    // Assert.
    expect(result).toEqual({
      authenticating: true,
      isAuthenticated: false,
      error: false,
      errorMessage: null
    });
  });

  it('should handle a successfully login', () => {
    // Act.
    const result = reducer([], {
      type: types.LOGIN_SUCCESS,
      user: {
        name: 'John'
      }
    });

    // Assert.
    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: true,
      error: false,
      errorMessage: null,
      user: {
        name: 'John'
      }
    });
  });

  it('should handle a failed login', () => {
    // Act.
    const result = reducer([], {
      type: types.LOGIN_ERROR,
      message: 'Unexpected error.'
    });

    // Assert.
    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: false,
      error: true,
      errorMessage: 'Unexpected error.'
    });
  });
});
