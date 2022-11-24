import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Rocket from '../pages/Rockets';
import store from '../redux/store';

describe('Rocket', () => {
  test('renders Rocket component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Rocket />
        </Router>
      </Provider>,
    );
    const rocket = screen.getByTestId('rocket');
    expect(rocket).toEqual(expect.anything());
  });
});
