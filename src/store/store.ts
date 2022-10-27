import {configureStore} from '@reduxjs/toolkit';
import authReducer, {AUTH} from '../reducers/auth';

export default configureStore({
  reducer: {
    [AUTH]: authReducer,
  },
});
