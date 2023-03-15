import { render } from '@testing-library/react';
import React from 'react';
import { titleSection } from '../../lib/consultancy';
import Consultancy from '../../pages/asesoria';

describe('<Consultancy />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<Consultancy />);
  });
  test('contain alert text', () => {
    component.getByText('Conozca los tipos de vivienda y las ventajas de cada una');
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
  test('Render title in first step', () => {
    expect(titleSection[0]).toBe(
      'Conozca los tipos de vivienda y las ventajas de cada una'
    );
  });
  test('Render title in second step', () => {
    expect(titleSection[1]).toBe(
      'Organice sus finanzas y planifique el pago de su vivienda'
    );
  });
  test('Render title in next step', () => {
    expect(titleSection[2]).toBe('Tenga en cuenta los siguientes gastos adicionales');
  });
  test('Render title in last step', () => {
    expect(titleSection[3]).toBe('¡Felicitaciones, ha logrado su meta!');
  });
});
