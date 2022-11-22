import { render } from '@testing-library/react';
import Politicas from '../components/commons/Politicas';

describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<Politicas />);
    expect(baseElement).toBeTruthy();
  });

});
