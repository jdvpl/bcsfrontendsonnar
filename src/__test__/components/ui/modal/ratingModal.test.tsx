import { render } from '@testing-library/react';
import React from 'react'
import { RatingModal } from '../../../../components/ui/Modal/ratingModal';

describe('<RatingModal />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<RatingModal />);
  });
  test('contain alert text', () => {
    component.getByText('¿Cómo califica su experiencia solicitando su crédito de vivienda?');
  });
});
