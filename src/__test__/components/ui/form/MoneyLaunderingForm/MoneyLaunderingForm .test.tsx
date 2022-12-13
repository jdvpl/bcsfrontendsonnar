import { render } from '@testing-library/react';
import React from 'react';
import { MoneyLaunderingForm } from '../../../../../components/ui/Form/MoneyLaunderingForm/MoneyLaunderingForm';

describe('<HouseSimulator />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<MoneyLaunderingForm />);
  });
  test('contain alert text', () => {
    component.getByText(
      '¿El origen de sus recursos es legal y los obtiene de sus actividades económicas u ocupación?'
    );
  });
  test('contain alert text', () => {
    component.getByText('¿Es una persona politicamente expuesta?');
  });
  test('contain alert text', () => {
    component.getByText(
      '¿Es funcionario con representación Legal en el Banco Caja Socia?'
    );
  });
  test('Render simulation button', () => {
    component.getByText('Continuar');
  });
  test('Render 3 cards ', () => {
    expect(component.container.querySelectorAll('.cardShadow').length).toBe(3);
  });
});
