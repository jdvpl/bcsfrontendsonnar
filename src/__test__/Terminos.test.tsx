import { render } from '@testing-library/react';
import Terminos from '../components/commons/Terminos';

describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<Terminos />);
    expect(baseElement).toBeTruthy();
  });

});
