import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from '../reducers';

type FixMeLater = any

export default configureStore({
  reducer: {
    auth: authReducer,
  },
}) as FixMeLater;
