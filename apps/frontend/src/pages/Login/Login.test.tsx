import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import store from '~/store/store';

import { render } from '@testing-library/react';

import Login from './Login';

describe('<Login />', () => {
  it('renders login button correctly', () => {
    const screen = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const darkModeSwitch = screen.getByTestId('sign_in_google');

    expect(darkModeSwitch).toBeInTheDocument();
    // fireEvent.click(button);
    // expect(greeting.textContent).toBe('Hello human!');
  });
});
