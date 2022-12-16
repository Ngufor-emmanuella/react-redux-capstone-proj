import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import City from '../components/city';
import Home from '../components/home';
import Pollution from '../components/Pollution';

it('App', () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/pollutiondata" element={<Pollution />} />
        </Routes>
      </Router>
    </Provider>,
  );
  expect(utils).toMatchSnapshot();
});
