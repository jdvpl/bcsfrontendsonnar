import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/newAutocomplete.test.tsx
=======
import NewAutoComplete from '../../../../components/ui/inputs/newAutoComplete';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/inputs/newAutocomplete.test.tsx
import React, { useState } from 'react'
import NewAutoComplete from '../components/ui/inputs/newAutoComplete';

describe('newAutoComplete', () => {
  const initialBorder = '#B0C2CD';

  test('should render "newAutoComplete" successfully', () => {
    const { baseElement } = render(<NewAutoComplete />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the value of color', () => {
    const { baseElement } = render(<NewAutoComplete />);
    React.useState = jest.fn().mockReturnValue([initialBorder, {}])
    expect(baseElement.classList.length).toBe(0)
  })

});
