import { render } from '@testing-library/react';
import InactivityScreen from '../pages/inactividad';

describe('<HouseSimulator />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<InactivityScreen />);
  });
  test('contain alert text', () => {
    component.getByText('El proceso se ha cerrado por inactividad');
  });
  test('contain alert text', () => {
    component.getByText('Regresar al inicio');
  });
});
