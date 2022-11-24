import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Missions from '../../pages/Missions';
import store from '../../redux/store';

describe('Missions', () => {
  test('renders Mission component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
