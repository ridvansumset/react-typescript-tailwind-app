import {configureStore} from '@reduxjs/toolkit';
import {authReducer, uiReducer} from '../reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
