import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import Villes from '../components/villes';
import Maison from '../components/maison';
import Pollutes from '../components/Pollute';

it('App', () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Maison />} />
          <Route path="/villes" element={<Villes />} />
          <Route path="/pollutiondata" element={<Pollutes />} />
        </Routes>
      </Router>
    </Provider>,
  );
  expect(utils).toMatchSnapshot();
});
