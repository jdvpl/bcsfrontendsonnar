import { render } from '@testing-library/react';
import React from 'react';
import MoneyLaunderingPage from '../../pages/preguntas-sarlaft';
import '@testing-library/jest-dom'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';

jest.useFakeTimers();

describe('<HouseSimulator />', () => {
  let component: any;
  beforeEach(() => {
    const router = createMockRouter({});
    component = render(<RouterContext.Provider value={router}>
      <MoneyLaunderingPage />
    </RouterContext.Provider>);
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
