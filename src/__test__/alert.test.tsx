import { render } from '@testing-library/react';
import Alert from '../components/ui/Alert';

describe('<Alert/>', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Alert message="card" />);
    expect(baseElement).toBeTruthy();
  });
});
