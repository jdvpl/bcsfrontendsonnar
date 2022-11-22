import { render } from '@testing-library/react';
import { NavTitle } from '../components/commons/NavTitle';

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<NavTitle />);
    expect(baseElement).toBeTruthy();
  });

});
