import { render, screen } from '@testing-library/react';
import SelectiveHomeCards from '../../../../components/ui/Home/SelectiveHomeCards';
import React from 'react'

describe('<SelectiveHomeCards/>', () => {
  test('should render correctly', () => {
    const { baseElement } = render(<SelectiveHomeCards isMobile />);
    expect(baseElement).toBeTruthy()
  })
})
