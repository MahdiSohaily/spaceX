import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Missions = () => (
  <div>
    <h1>Missions</h1>
  </div>
);

describe('Missions', () => {
  test('render React component', () => {
    render(<Missions />);
    expect(screen.getByText('Missions')).toBeInTheDocument();
  });
});
