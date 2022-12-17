import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './Reducers/Countries';
import citysReducer from './Reducers/Cities';
import pollutionReducer from './Reducers/Pollution';

const rootReducer = combineReducers({
  countryReducer,
  citysReducer,
  pollutionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
