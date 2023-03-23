import { render } from '@testing-library/react';
import React from 'react'
import { RatingModal } from '../../../../../components/ui/Modal/ratingModal';
import '@testing-library/jest-dom';

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
  test('should find the icon', () => {
    const iconRating = component.getByTestId("iconRating");
    expect(iconRating.tagName).toMatch('I');
    expect(iconRating).toHaveClass('bcs-icon-23')
  })
});
