import { render } from '@testing-library/react';
import { ErrorImageDesktop } from '../components/icons/errorImageValidationDesktop';

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ErrorImageDesktop />);
    expect(baseElement).toBeTruthy();
  });
});