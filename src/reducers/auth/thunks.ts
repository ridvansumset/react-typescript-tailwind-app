import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetUserResponse, LoginResponse} from '../../services/api';
import {APIService as APIS} from '../../services';
import {AuthState, logout} from './auth';

// TODO: use this for now since we cannot use AUTH from ./auth somehow
const AUTH = 'auth';

export const login = createAsyncThunk(`${AUTH}/login`, async (payload) => {
  try {
    const { data }: LoginResponse = await APIS.loginCall(payload) as LoginResponse;
    return data;
  } catch (err) {
    alert(err);
    throw err;
  }
});

export const getUser = createAsyncThunk(`${AUTH}/getUser`, async (payload) => {
  try {
    const { data }: GetUserResponse = await APIS.getUserCall(payload) as GetUserResponse;
    return data;
  } catch (err) {
    alert(err);
    throw err;
  }
});

export const validateAccessToken = createAsyncThunk(`${AUTH}/validateAccessToken`, async (_, {getState, dispatch}) => {
  const store: { auth: AuthState } = getState() as { auth: AuthState };
  const accessToken = store.auth.accessToken;

  if (accessToken) {
    // @ts-ignore react-redux bug
    await dispatch(getUser(accessToken));
  } else {
    await dispatch(logout());
  }
});
