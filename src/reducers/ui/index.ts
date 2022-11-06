import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store'

type UIState = {
  darkMode: boolean;
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: true,
  } as UIState,
  reducers: {
    updateDarkMode: (state, {payload}: PayloadAction<boolean>) => {
      state.darkMode = payload;
    },
  },
});

export const {updateDarkMode} = uiSlice.actions;

export const selectDarkMode = (state: RootState) => state.ui.darkMode;

export default uiSlice.reducer;
