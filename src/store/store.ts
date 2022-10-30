import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import searchSlice from './search/searchSlice';
import sortingSlice from './sorting/sortingSlice';
import userSlice from './user/userSlice';

const isDev = process.env.NODE_ENV !== 'production';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    sorting: sortingSlice.reducer,
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (isDev) {
      return getDefaultMiddleware().concat(logger);
    }
    return getDefaultMiddleware();
  },
  devTools: isDev,
});

export type GlobalState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;