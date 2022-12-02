import { render, screen } from '@testing-library/react';
import Home from '../../pages';
import React from 'react'
describe('Landing page testing', () => {
  it('should test some component from landing page', () => {
    render(<Home />)
    const landing = screen.getByTestId('landingPage')
    // expect(landing).toMatchSnapshot()
  })

})
