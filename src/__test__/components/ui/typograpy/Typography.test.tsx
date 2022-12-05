import { render, screen } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/Typography.test.tsx
=======
import Typography from '../../../../components/ui/Typography';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/typograpy/Typography.test.tsx
import React from 'react'
import Typography from '../components/ui/Typography';

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
