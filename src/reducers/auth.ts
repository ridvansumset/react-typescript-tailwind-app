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
    })
    builder.addCase(login.fulfilled, (state, action) => {
      if (state.isLoading) {
        BSS.setAccessToken(action.payload.accessToken);
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoading = false;
      }
    })
    builder.addCase(login.rejected, (state) => {
      if (state.isLoading) {
        state.user = null;
        state.accessToken = null;
        state.isLoading = false;
      }
    })
    // GET USER
    builder.addCase(getUser.pending, (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (state.isLoading) {
        state.user = action.payload;
        state.isLoading = false;
      }
    })
    builder.addCase(getUser.rejected, (state) => {
      if (state.isLoading) {
        state.isLoading = false;
      }
    })
  },
});

export const {logout} = authSlice.actions;

export const login = createAsyncThunk(`${AUTH}/login`, async (payload) => {
  console.log('payload', payload);
  // mock api call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // randomly decide if got error
  const gotError = Math.random() < 0.1;

  if (gotError) {
    alert('couldn\'t login. try again later');
    return {accessToken: null, user: null};
  }
  return {accessToken: 'jwt', user: {name: 'Ridvan', email: 'ridvansumset@gmail.com'} as User};
});

export const getUser = createAsyncThunk(`${AUTH}/getUser`, async (_, {getState}) => {
  // await axios.get('https://jsonplaceholder.typicode.com/users');

  const store = getState()
  // @ts-ignore
  console.log(store[AUTH].accessToken);

  // mock api call (normally, it should call getUser API with accessToken)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // randomly decide if got error
  const gotError = Math.random() < 0.3;

  if (gotError) {
    alert('Session expired');
    return null;
  }
  return {name: 'Ridvan', email: 'ridvansumset@gmail.com'} as User;
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

export default authSlice.reducer
