import { render, screen, getByRole, waitFor } from '@testing-library/react';
import React from 'react';
import Simulator from '../../../../pages/simulador';
import { fireEvent, act } from '@testing-library/react';
import FormQuota from '../../../../components/ui/Form/FormQuota';
const mkFn = jest.fn();
describe('All tests of formQuota', () => {
  let component: any;
  beforeEach(() => {
    component = render(<Simulator />);
  });

  test('contain alert text', () => {
    component.getByText(
      'Recuerde que la financiación del crédito hipotecario es hasta el 70% del valor comercial de la vivienda.'
    );
  });
  test('Render simulation button', () => {
    component.getByText('Simular');
  });
  test('Render 10 inputs ', () => {
    expect(component.container.querySelectorAll('input').length).toBe(10);
  });
});

describe('<FormQuota />', () => {
  it('Should render FormQuota component correctly', async () => {
    const mockOnSubmit = jest.fn();
    const component = render(<FormQuota onSubmit={mockOnSubmit} isLoading={true} />);
    component.getByText('Un momento');
  });
});
