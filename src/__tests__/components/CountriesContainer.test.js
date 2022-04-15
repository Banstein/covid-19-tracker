import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../__mocks__/configureStore';
import CountriesContainer from '../../components/CountriesContainer';

describe('Countries snapshot', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CountriesContainer />
        </BrowserRouter>
      </Provider>,
    );
  });
});
