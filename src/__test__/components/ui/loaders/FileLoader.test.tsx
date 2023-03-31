import { render } from '@testing-library/react';
import { FileLoader } from '../../../../components/ui/Loaders/FileLoader';

describe('render fileLoader', () => {
  test('should render "FileLoader" successfully', () => {
    const { baseElement } = render(<FileLoader />);
    expect(baseElement).toBeTruthy();
  });
});
