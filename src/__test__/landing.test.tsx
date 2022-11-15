import { render, screen } from '@testing-library/react';
import Home from '../pages';


describe('Landing page testing', () => {
  it('should test some component from landing page', () => {
    render(<Home />)
    const landing = screen.getByTestId('landingPage')
    // expect(landing).toMatchSnapshot()
  })
})
