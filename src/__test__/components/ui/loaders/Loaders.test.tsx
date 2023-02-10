import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import React from 'react';
import { OTLoader } from '../../../../components/ui/Loaders/OTPloader';
import CheckLoader from '../../../../components/ui/Loaders/CheckLoader';
import SimulatorLoader from '../../../../components/ui/Loaders/SimulatorLoader';
import SiteDown from '../../../../pages/validacion/error-servicio';

describe('OTLoader', () => {
  test('should render "OTLoader" successfully', () => {
    const { baseElement } = render(<OTLoader />);
    expect(baseElement).toBeTruthy();
  });
  test('should render "CheckLoader" successfully', () => {
    const { baseElement } = render(<CheckLoader/>);
    expect(baseElement).toBeTruthy();
  });
  test('should render "SimulatorLoader" successfully', () => {
    const { baseElement } = render(<SimulatorLoader />);
    expect(baseElement).toBeTruthy();
  });
  test('should render "SimulatorLoader" successfully', () => {
    const { baseElement } = render(<SiteDown />);
    expect(baseElement).toBeTruthy();
  });
});
