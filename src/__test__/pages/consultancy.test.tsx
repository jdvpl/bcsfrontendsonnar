import { render } from '@testing-library/react';
import React from 'react'
import Consultancy from '../../pages/asesoria';

describe('<Consultancy />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<Consultancy />);
  });
  test('contain alert text', () => {
    component.getByText('Esto es lo primero que debe saber para comprar una vivienda');
  });
  test('Render simulation button', () => {
    component.getByText('Volver al Inicio');
  });
  test('Render simulation insurance text', () => {
    component.getByText('Siguiente');
  });
  test('Render simulation insurance text', () => {
    component.getByText('Características de vivienda');
  });
  test('Render simulation insurance text', () => {
    component.getByText('Paso 1 de 4');
  });
  test('Render simulation insurance text', () => {
    component.getByText('Vivienda Nueva');
  });
  test('Render simulation insurance text', () => {
    component.getByText('Vivienda Usada');
  });
  test('Render simulation insurance text', () => {
    component.getByText('¿Qué es vivienda VIS?');
  });
  test('Render simulation insurance text', () => {
    component.getByText('¿Qué es vivienda No VIS?');
  });

});
