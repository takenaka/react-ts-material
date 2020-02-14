import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import userSlice from 'stores/slices/user';
import appSlice from 'stores/slices/app';

const reducer = combineReducers({
  app: appSlice.reducer,
  user: userSlice.reducer
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export type AppThunk<T> = ThunkAction<
  Promise<T>,
  RootState,
  null,
  Action<string>
>;

export default store;
