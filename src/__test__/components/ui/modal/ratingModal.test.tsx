import { render } from '@testing-library/react';
import { RatingModal } from '../../../../components/ui/Modal/ratingModal';
import React from 'react'
describe('<RatingModal />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<RatingModal />);
  });
  test('contain alert text', () => {
    component.getByText('¿Cómo califica su experiencia solicitando su crédito de vivienda?');
  });
});
