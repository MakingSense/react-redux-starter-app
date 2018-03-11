import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as authActions from './authActions';
import * as types from '../constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions', () => {
  it('should create an action to start a login request', () => {
    // Arrange.
    const expectedAction = {
      type: types.LOGIN_REQUEST
    };

    // Act.
    const result = authActions.loginRequest();

    // Assert.
    expect(result).toEqual(expectedAction);
  });

  it('should create an action to handle a successfully login', () => {
    // Arrange.
    const user = {
      name: 'John'
    };

    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      user
    };

    // Act.
    const result = authActions.loginSuccess(user);

    // Assert.
    expect(result).toEqual(expectedAction);
  });

  it('should create an action to handle a failed login', () => {
    // Arrange.
    const message = 'Testing an error.';
    const expectedAction = {
      type: types.LOGIN_ERROR,
      message
    };

    // Act.
    const result = authActions.loginError(message);

    // Assert.
    expect(result).toEqual(expectedAction);
  });

  it('should handle successful login when valid credentials provided', () => {
    // Arrange.
    const username = 'username';
    const password = 'password';
    const user = {
      name: 'John'
    };

    const store = mockStore({
      auth: {}
    });

    // TODO: Mock service response.

    // Act & assert.
    return store.dispatch(authActions.login(username, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: types.LOGIN_REQUEST });
      expect(actions[1]).toEqual({ type: types.LOGIN_SUCCESS, user });
    });
  });

  it('should handle failed login when invalid credentials provided', () => {
    // Arrange.
    const username = 'invalid';
    const password = 'invalid';
    const message = 'Invalid credentials.';
    const store = mockStore({
      auth: {}
    });

    // TODO: Mock service response.

    // Act & assert.
    return store.dispatch(authActions.login(username, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: types.LOGIN_REQUEST });
      expect(actions[1]).toEqual({ type: types.LOGIN_ERROR, message });
    });
  });
});
