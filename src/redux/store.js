import { configureStore } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice';
import { filterReducer } from './reducers.js';
// import { contactsReducer } from './contactsSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { myAPI } from '../api/myAPI';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    // serializableCheck: {
    //   ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }).concat(logger);

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   contacts: contactsReducer,
// });

// const persistConfig = {
//   key: 'contactList',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [myAPI.reducerPath]: myAPI.reducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistMaker = persistStore(store);
