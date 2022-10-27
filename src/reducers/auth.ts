// import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {BrowserStorageService as BSS} from '../services';
import {User} from '../models';

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

interface LoginResp {
  data: {
    accessToken: string;
    user: User;
  };
}
const loginCall = (payload: void) => new Promise((res, rej) => {
  console.log('loginCall payload', payload);

  const gotError = Math.random() < 0.1;
  if (gotError) {
    return setTimeout(() => rej(new Error('couldn\'t login. try again later')), 2000);
  }

  const data = {
    accessToken: 'jwt',
    user: {
      name: 'Ridvan',
      email: 'ridvansumset@gmail.com'
    } as User,
  };

  return setTimeout(() => res({data} as LoginResp), 2000);
});
export const login = createAsyncThunk(`${AUTH}/login`, async (payload) => {
  try {
    const resp: LoginResp = await loginCall(payload) as LoginResp;
    return resp.data;
  } catch (err) {
    alert(err);
    throw err;
  }
});

interface GetUserResp {
  data: User;
}
const getUserCall = (payload: void) => new Promise((res, rej) => {
  console.log('getUserCall payload', payload);
  const gotError = Math.random() > 0.1;
  if (gotError) {
    return setTimeout(() => rej(new Error('Session expired')), 2000);
  }

  const data: User = {
    name: 'Ridvan',
    email: 'ridvansumset@gmail.com',
  };

  return setTimeout(() => res({data} as GetUserResp), 2000);
});
export const getUser = createAsyncThunk(`${AUTH}/getUser`, async (_, {getState}) => {
  const store: any = getState()

  try {
    const resp: GetUserResp = await getUserCall(store[AUTH].accessToken) as GetUserResp;
    return resp.data;
  } catch (err) {
    alert(err);
    throw err;
  }
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getUserThunk = () => (dispatch: any, getState: any) => {
  setTimeout(() => {
    const pstate = getState()
    console.log(pstate[AUTH]);

    const isTokenValid = Math.random() > 0.3;
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((response) => response.json())
      .then((json) => console.log(json));

    const nstate = getState()
    console.log(nstate[AUTH]);

    // dispatch(setTokenValidity(isTokenValid))

    if (!isTokenValid) {
      alert('Token expired');
    }
  }, 2000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.auth.value)`
export const selectIsLoading = (store: { [AUTH]: AuthState }) => store[AUTH].isLoading;

export default authSlice.reducer;
