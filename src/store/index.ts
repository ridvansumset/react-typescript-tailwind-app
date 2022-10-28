import store from './store';
import type {RootState, AppDispatch} from './store';
import {useAppDispatch, useAppSelector} from './hooks';

export type {
  RootState,
  AppDispatch,
};

export {
  useAppDispatch,
  useAppSelector,
};

export default store;
