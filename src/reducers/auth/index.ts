import authReducer, {AUTH, logout, selectIsLoading} from './auth';
import type {AuthState} from './auth';
import {login, getUser, validateAccessToken} from './thunks';

export {
  AUTH,
  AuthState,
  login,
  logout,
  getUser,
  selectIsLoading,
  validateAccessToken,
};

export default authReducer;
