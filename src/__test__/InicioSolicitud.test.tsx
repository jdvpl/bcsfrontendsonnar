import { render } from '@testing-library/react';
import React from 'react'
import InicioSolicitud from '../pages/inicio-solicitud';

describe('InicioSolicitud', () => {
  test('should render "InicioSolicitud" successfully', () => {
    const { baseElement } = render(<InicioSolicitud />);
    expect(baseElement).toBeTruthy();
  });

});
