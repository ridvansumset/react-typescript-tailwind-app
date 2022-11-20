import {createAsyncThunk} from '@reduxjs/toolkit';
import type {GetUserResponse, LoginRequest, LoginResponse} from '../../services/api';
import {APIService as APIS} from '../../services';
import {toastError} from '../../utils';
import {logout} from './auth';
import type {RootState} from '../../store';

export const login = createAsyncThunk('auth/login', async (payload: LoginRequest) => {
  try {
    const { data }: LoginResponse = await APIS.loginCall(payload) as LoginResponse;
    return data;
  } catch (err) {
    toastError(err);
    throw err;
  }
});

export const getUser = createAsyncThunk('auth/getUser', async (payload: string) => {
  try {
    const { data }: GetUserResponse = await APIS.getUserCall(payload) as GetUserResponse;
    return data;
  } catch (err) {
    toastError(err);
    throw err;
  }
});

export const validateAccessToken = createAsyncThunk('auth/validateAccessToken', async (_, {getState, dispatch}) => {
  const store: RootState = getState() as RootState;
  const accessToken = store.auth.accessToken;

  if (accessToken) {
    await dispatch(getUser(accessToken));
  } else {
    await dispatch(logout());
  }
});
