import authReducer, {logout, selectIsLoading} from './auth';
import {login, getUser, validateAccessToken} from './thunks';

export {
  login,
  logout,
  getUser,
  selectIsLoading,
  validateAccessToken,
};

export default authReducer;
