import { render, fireEvent } from '@testing-library/react';
import { debug } from 'console';
import React from 'react';
import { MoneyLaunderingForm } from '../../../../../components/ui/Form/MoneyLaunderingForm/MoneyLaunderingForm';

describe('<HouseSimulator />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<MoneyLaunderingForm />);
  });
  test('should render all form', () => {
    expect(component.baseElement).toBeTruthy();
  })

  test('contain alert text', () => {
    component.getByText(
      '¿El origen de sus recursos es legal y los obtiene de sus actividades económicas u ocupación?'
    );
  });
  test('contain alert text', () => {
    component.getByText('¿Es una persona políticamente expuesta?');
  });
  test('contain alert text', () => {
    component.getByText(
      '¿Es funcionario o familiar de un administrador o representante legal en el Banco Caja Social?'
    );
  });
  test('Render simulation button', () => {
    component.getByText('Continuar');
  });
  test('Render 3 cards ', () => {
    expect(component.container.querySelectorAll('.cardShadow').length).toBe(3);
  });
});

describe('<MoneyLaunderingForm/>', () => {
  test('should check "yes" option', async () => {
    const { findAllByTestId } = render(<MoneyLaunderingForm />);
    const firstOption = await findAllByTestId('firstOption')[0];
    fireEvent.click(firstOption);
    const firstOptionSelected = await findAllByTestId('firstOptionSelected')[0];
    debug(firstOptionSelected)
    // expect(firstOptionSelected).toBeInTheDocument();
  })
})
