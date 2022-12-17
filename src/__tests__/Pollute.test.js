import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import Pollutes from '../components/Pollute';

it('Pollutes', () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/pollutiondata" element={<Pollutes />} />
        </Routes>
      </Router>
    </Provider>,
  );
  expect(utils).toMatchSnapshot();
});
