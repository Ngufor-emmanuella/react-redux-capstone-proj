import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://countriesnow.space/api/v0.1/countries/cities';
const FETCH_TOWN = 'FETCH_TOWN';

export const fetchTown = createAsyncThunk(
  FETCH_TOWN,
  async (town) => {
    const data = await (fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        country: town,
      }),
    }).then((res) => res.json())
      .then((output) => output));
    return data;
  },
);

const townReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_TOWN}/fullfilled`: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default townReducer;
