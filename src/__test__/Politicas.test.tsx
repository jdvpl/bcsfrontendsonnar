import { render } from '@testing-library/react';
import Politicas from '../components/commons/Politicas';

describe('Politicas', () => {
  test('should render "Politicas" successfully', () => {
    const { baseElement } = render(<Politicas />);
    expect(baseElement).toBeTruthy();
  });

});
