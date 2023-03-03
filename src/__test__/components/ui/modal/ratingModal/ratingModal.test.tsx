import { fireEvent, render } from '@testing-library/react';
import React from 'react'
import { RateForm } from '../../../../../components/ui/Form/ratingForm';
import { RatingModal } from '../../../../../components/ui/Modal/ratingModal';

describe('<RatingModal />', () => {
  let component: any;
  beforeEach(() => {
    component = render(<RatingModal />);
  });
  test('should render component', () => {
    expect(component.container).toBeTruthy();
  })

  test('contain alert text', () => {
    component.getByText('¿Cómo califica su experiencia solicitando su crédito de vivienda?');
  });

});
