import { combineReducers, Reducer } from 'redux';
import { RootState } from './state';
import axios from 'axios';
import locationReducer from './location';

export interface Action {
  type: string;
  payload: any;
}

export const reducer: Reducer<RootState> = combineReducers<RootState, any>({
  location: locationReducer,
});

export const rootReducer = (state: RootState, action: any) => {
  return reducer(state, action);
};

axios.defaults.headers = {
  'Content-Type': 'application/json',
};

export type Error = any;
