import { render } from '@testing-library/react';
import HouseSimulator from '../../../../components/ui/Form/houseSimulator/HouseSimulator';
import React from 'react'

describe('<HouseSimulator />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<HouseSimulator />);
  });
  test('contain alert text', () => {
    component.getByText(
      'Recuerde que la financiación del crédito hipotecario es hasta el 70% del valor comercial de la vivienda y la cuota inicial equivalente al 30% restante debe solventarla con recursos propios.'
    );
  });
  test('Render simulation button', () => {
    component.getByText('Simular');
  });
  test('Render 7 inputs ', () => {
    expect(component.container.querySelectorAll('input').length).toBe(7);
  });
});
