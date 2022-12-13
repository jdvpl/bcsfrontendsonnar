import { render } from '@testing-library/react';
import React from 'react'
import AdvisoryForm from '../../../components/commons/AdvisoryForm';

describe('AdvisoryForm', () => {
  test('should render Advisory successfully', () => {
    const { baseElement } = render(<AdvisoryForm />);
    expect(baseElement).toBeTruthy();
  });
});