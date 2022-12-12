import { createAsyncThunk } from '@reduxjs/toolkit';

const key = '&appid=aff53bd7154a6d1faefb6b53deac0c16';
const urlDirect = 'https://api.openweathermap.org/geo/1.0/direct?q=';
const urlForecast = 'https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=';
const FETCH_POLUTION = 'FETCH_POLUTION';

export const Polute = createAsyncThunk(
  FETCH_POLUTION,
  async (obj) => {
    const sum = await (fetch(`${urlDirect}${obj.cityname},${obj.countryname}&limit=1${key}`)).then((res) => res.json());
    if (sum.length !== 0) {
      const pollutants = await (fetch(`${urlForecast}${sum[0].lat}&lon=${sum[0].lon}&start=1669974100&end=1669974101${key}`)).then((res) => res.json());
      return pollutants.list;
    }

    return sum;
  },
);

const polsReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_POLUTION}/fullfilled`: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default polsReducer;
