import { render } from '@testing-library/react';
import CommercialAuthorization from '../components/commons/CommercialAuthorization';

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<CommercialAuthorization />);
    expect(baseElement).toBeTruthy();
  });

});
