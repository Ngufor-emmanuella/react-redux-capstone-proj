import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v3.1/region/africa';
const FETCH = 'FETCH';
const FILTER = 'FILTER';

export const lookCountries = createAsyncThunk(
  FETCH,
  async () => {
    const sum = await (fetch(url)).then((res) => res.json());
    const result = sum.map((country) => ({
      name: country.name.common,
      countrycode: country.cca2,
      region: country.region,
      capital: country.capital,
    }));
    return result;
  },
);

export const lookThroughCountries = (sum = '') => (
  {
    type: FILTER,
    payload: sum,
  }
);

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH}/fullfilled`: {
      return action.payload;
    }

    case FILTER: {
      const newState = state.filter((e) => e.name.toString().toLowerCase()
        .includes(action.payload.toString().toLowerCase()));
      return newState;
    }

    default:
      return state;
  }
};

export default countriesReducer;
