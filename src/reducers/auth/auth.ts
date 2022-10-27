import {createSlice} from '@reduxjs/toolkit';
import {login, getUser} from './thunks';
import {BrowserStorageService as BSS} from '../../services';
import {User} from '../../models';

export const AUTH = 'auth';

export type AuthState = {
  isLoading: boolean,
  user: User | null,
  accessToken: string | null,
}

const authSlice = createSlice({
  name: AUTH,
  initialState: {
    isLoading: false,
    user: null,
    accessToken: BSS.getAccessToken(),
  } as AuthState,
  reducers: {
    logout: (state) => {
      BSS.clearAccessToken();
      state.isLoading = false;
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder.addCase(login.pending, (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const {accessToken, user} = action.payload;

      if (accessToken) {
        BSS.setAccessToken(accessToken);
      }

      state.accessToken = accessToken;
      state.user = user;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.user = null;
      state.accessToken = null;
      state.isLoading = false;
    });
    // GET USER
    builder.addCase(getUser.pending, (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      if (state.isLoading) {
        BSS.clearAccessToken();
        state.user = null;
        state.accessToken = null;
        state.isLoading = false;
      }
    });
  },
});

export const {logout} = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.auth.value)`
export const selectIsLoading = (store: { [AUTH]: AuthState }) => store[AUTH].isLoading;

export default authSlice.reducer;