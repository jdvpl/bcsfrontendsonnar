import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AplicationProvider, { AplicationContext } from '../../context/AplicationContext';
import '@testing-library/jest-dom';


describe('AplicationProvider', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <AplicationProvider>
        <AplicationContext.Consumer>
          {value => <div>{JSON.stringify(value)}</div>}
        </AplicationContext.Consumer>
      </AplicationProvider>
    );
    expect(getByText(/fotosCedula/i)).toBeInTheDocument();
  });


});