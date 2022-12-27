import { render, screen } from '@testing-library/react';
import React from 'react'
import Typography from '../../../../components/ui/Typography';

describe('Typography', () => {
  test('should render "Typography" successfully', () => {
    const { baseElement } = render(<Typography variant='h2'>Hola mundo</Typography>);
    expect(baseElement).toBeTruthy();
  });
  test('should render "Typography" successfully as H1', () => {
    render(<Typography variant='h1'>Hola mundo</Typography>);
    const element = screen.getByTestId('typographyTest')
    expect(element.tagName).toMatch('H1');
  });
  test('should render "Typography" successfully as a P', () => {
    render(<Typography variant='bodyM1'>Hola mundo</Typography>);
    const element = screen.getByTestId('typographyTest')
    expect(element.tagName).toMatch('P');
  });

});
