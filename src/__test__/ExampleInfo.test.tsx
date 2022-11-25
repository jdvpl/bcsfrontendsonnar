import { render } from '@testing-library/react';
import { ExampleInfo } from '../components/commons/ExampleInfo';

describe('ExampleInfo', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<ExampleInfo />);
    expect(baseElement).toBeTruthy();
  });

});
