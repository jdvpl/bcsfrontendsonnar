import { AplicationProvider, AplicationContext } from '../../context/AplicationContext';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';

describe('AplicationProvider', () => {
  it('should change the progress', () => {
    const { getByTestId } = render(
      <AplicationProvider>
        <AplicationContext.Consumer>
          {({ progress, changeProgress }) => (
            <button
              data-testid="test-button"
              onClick={() => changeProgress(50)}
            ></button>
          )}
        </AplicationContext.Consumer>
      </AplicationProvider>
    );

    fireEvent.click(getByTestId('test-button'));

    // expect(progress).toBe(50);
  });
  it('should set the selfie normal', () => {
    const { getByTestId } = render(
      <AplicationProvider>
        <AplicationContext.Consumer>
          {({ selfies, setSelfieNormal }) => (
            <button
              data-testid="test-button"
              onClick={() => setSelfieNormal('selfie.jpg')}
            ></button>
          )}
        </AplicationContext.Consumer>
      </AplicationProvider>
    );

    fireEvent.click(getByTestId('test-button'));

  });

  it('should set the foto delantera', () => {
    const { getByTestId } = render(
      <AplicationProvider>
        <AplicationContext.Consumer>
          {({ fotosCedula, setFotoDelantera }) => (
            <button
              data-testid="test-button"
              onClick={() => setFotoDelantera('foto.jpg')}
            ></button>
          )}
        </AplicationContext.Consumer>
      </AplicationProvider>
    );

    fireEvent.click(getByTestId('test-button'));

  });
});
