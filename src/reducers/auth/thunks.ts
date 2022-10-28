import {createAsyncThunk} from '@reduxjs/toolkit';
import type {GetUserResponse, LoginResponse} from '../../services/api';
import {APIService as APIS} from '../../services';
import {logout} from './auth';
import type {RootState} from '../../store';

export const login = createAsyncThunk('auth/login', async (payload) => {
  try {
    const { data }: LoginResponse = await APIS.loginCall(payload) as LoginResponse;
    return data;
  } catch (err) {
    alert(err);
    throw err;
  }
});

export const getUser = createAsyncThunk('auth/getUser', async (payload) => {
  try {
    const { data }: GetUserResponse = await APIS.getUserCall(payload) as GetUserResponse;
    return data;
  } catch (err) {
    alert(err);
    throw err;
  }
});

export const validateAccessToken = createAsyncThunk('auth/validateAccessToken', async (_, {getState, dispatch}) => {
  const store: RootState = getState() as RootState;
  const accessToken = store.auth.accessToken;

  if (accessToken) {
    // @ts-ignore react-redux bug: expected 0 arguments but got 1
    await dispatch(getUser(accessToken));
  } else {
    await dispatch(logout());
  }
});
