import { render } from '@testing-library/react';
import Card from '../components/ui/Card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card dataTestId="card" />);
    expect(baseElement).toBeTruthy();
  });
});
