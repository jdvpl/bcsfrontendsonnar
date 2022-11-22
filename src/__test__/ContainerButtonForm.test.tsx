import { render } from '@testing-library/react';
import { ContainerButtonForm } from '../components/form/containerButtonForm';

describe('ContainerButtonForm', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ContainerButtonForm>Prueba</ContainerButtonForm>);
    expect(baseElement).toBeTruthy();
  });
});
