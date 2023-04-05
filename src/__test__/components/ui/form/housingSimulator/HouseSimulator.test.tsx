import { fireEvent, render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import HouseSimulator from '../../../../../components/ui/Form/houseSimulator/HouseSimulator';
import { routes } from '../../../../../routes';
import { sendSimulationData } from '../../../../../services';
import { createMockRouter } from '../../../../utils/createMockRouter';


jest.mock('../../../../../services', () => ({
  sendSimulationData: jest.fn(),
}));

describe('<HouseSimulator />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<HouseSimulator />);
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