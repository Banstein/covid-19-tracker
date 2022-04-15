/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../__mocks__/configureStore';
import OneCountry from '../../components/OneCountry';

describe('One Country snapshot', () => {
  const id = 'germany';
  const name = 'Germany';
  const today_confirmed = 47;
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OneCountry id={id} name={name} today_confirmed={today_confirmed} />
        </BrowserRouter>
      </Provider>,
    );
  });
});
