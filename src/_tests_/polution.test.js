import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Polls from '../components/polution';

it('Polls', () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/pollutiondata" element={<Polls />} />
        </Routes>
      </Router>
    </Provider>,
  );
  expect(utils).toMatchSnapshot();
});
