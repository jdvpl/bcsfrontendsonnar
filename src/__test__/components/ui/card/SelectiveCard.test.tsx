import { render } from '@testing-library/react';
import React from 'react'
import SelectiveCard from '../../../../components/ui/Card/SelectiveCard';
import '@testing-library/jest-dom';

describe('<SelectiveCard/>', () => {
  test('should render selective card', () => {
    const { baseElement } = render(<SelectiveCard description='Hola' titleClasses='mx-4' className='w-full' onclick={false} />)
    expect(baseElement).toBeTruthy();
  })
  test('should render selective classnaes', () => {
    const { getByTestId } = render(<SelectiveCard description='Hola' titleClasses='mx-4' className='w-full' onclick={false} />)
    expect(getByTestId("selectiveCardTest")).toHaveClass("w-full");
  })
});