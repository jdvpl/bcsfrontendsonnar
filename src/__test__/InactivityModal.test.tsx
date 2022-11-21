import { render } from '@testing-library/react';
import { InactivityModal } from '../components/ui/Modal/inactivityModal/index';

describe('<HouseSimuInactivityModallator />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<InactivityModal />);
  });
  test('contain alert text', () => {
    component.getByText('Ha estado inactivo en los últimos minutos');
  });
  test('Render simulation button', () => {
    component.getByText('Continuar');
  });
  test('Render simulation button', () => {
    component.getByText('Salir');
  });
});
