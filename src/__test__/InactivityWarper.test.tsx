import { render } from '@testing-library/react';
import { InactivityWarper } from '../components/ui/wrapers/InactivityWarper'

const fn = jest.fn()
describe('InactivitiWrapper', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<InactivityWarper >
      <h1>Inactividad</h1>
    </InactivityWarper>);
    expect(baseElement).toBeTruthy();
  });

});