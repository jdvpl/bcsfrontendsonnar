import React from 'react';
<<<<<<< HEAD:src/__test__/rating.test.tsx
=======
import Ratings from '../../pages/calificacion-solicitud';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/pages/rating.test.tsx
import { render } from '@testing-library/react';
import Ratings from '../pages/calificacion-solicitud';
import '@testing-library/jest-dom/extend-expect';

describe('<Ratings/>', () => {
  it('should render successfully', () => {
    const { container } = render(<Ratings />);
    expect(container).toBeTruthy();
  });
  it('should render model title', () => {
    const { container } = render(<Ratings />);
    expect(container).toHaveTextContent(
      `¿Cómo califica su experiencia solicitando su crédito de vivienda?`
    );
  });
  it('should render button text', () => {
    const { container } = render(<Ratings />);
    expect(container).toHaveTextContent(`Enviar calificación`);
  });

  it('should render qualify starts ', () => {
    const { container } = render(<Ratings />);
    const starsLength = container.querySelectorAll('svg').length;
    expect(starsLength).toBe(5);
  });
});
