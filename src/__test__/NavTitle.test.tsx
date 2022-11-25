import { render } from '@testing-library/react';
import { NavTitle } from '../components/commons/NavTitle';

describe('NavTitle', () => {
  test('should render "NavTitle" successfully', () => {
    const { baseElement } = render(<NavTitle />);
    expect(baseElement).toBeTruthy();
  });

});
