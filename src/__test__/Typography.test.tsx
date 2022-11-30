import { render, screen } from '@testing-library/react';
import Typography from '../components/ui/Typography';
import React from 'react'

describe('Typography', () => {
  test('should render "Typography" successfully', () => {
    const { baseElement } = render(<Typography variant='h2'>Hola mundo</Typography>);
    expect(baseElement).toBeTruthy();
  });
  test('should render "Typography" successfully', () => {
    render(<Typography variant='h1'>Hola mundo</Typography>);
    const element = screen.getByTestId('typographyTest')
    expect(element.tagName).toMatch('H1');
  });

});
