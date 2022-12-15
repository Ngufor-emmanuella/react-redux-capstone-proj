import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import City from '../components/city';

it('City', () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/city" element={<City />} />
        </Routes>
      </Router>
    </Provider>,
  );
  expect(utils).toMatchSnapshot();
});
