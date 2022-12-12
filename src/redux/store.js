import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import townReducer from './reducers/town';
import countriesReducer from './reducers/country';
import polsReducer from './reducers/polute';

const finalReducer = combineReducers({
  townReducer,
  countriesReducer,
  polsReducer,
});

const store = configureStore({
  reducer: finalReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
