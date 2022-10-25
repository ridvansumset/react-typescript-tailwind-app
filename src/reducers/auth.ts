import {createSlice} from '@reduxjs/toolkit';
import {BrowserStorageService as BSS} from '../services';

interface AuthState {
  isLoading: boolean,
  isValid: boolean | null,
  accessToken: string | null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: true,
    isValid: null,
    accessToken: BSS.getAccessToken(),
  } as AuthState,
  reducers: {
    login: (state, action) => {
      BSS.setAccessToken(action.payload);
      state.isValid = true;
      state.isLoading = false;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      BSS.clearAccessToken();
      state.isValid = false;
      state.isLoading = false;
      state.accessToken = null;
    },
    setTokenValidity: (state, action) => {
      const {payload: isTokenValid} = action;

      state.isValid = isTokenValid;
      state.isLoading = false;

      if (!isTokenValid) {
        BSS.clearAccessToken();
        state.accessToken = null;
      }
    },
  },
})

export const {login, logout, setTokenValidity} = authSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const checkTokenValidity = () => (dispatch: any, getState: any) => {
  setTimeout(() => {
    const state = getState()
    console.log(state);
    const isTokenValid = Math.random() > 0.3;
    dispatch(setTokenValidity(isTokenValid))
    if (!isTokenValid) {
      alert('Token expired');
    }
  }, 2000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.auth.value)`
export const selectAccessToken = (state: { auth: AuthState }) => state.auth.accessToken;

export const selectTokenValidity = (state: { auth: AuthState }) => state.auth.isValid;

export default authSlice.reducer
