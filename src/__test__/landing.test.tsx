import { render } from '@testing-library/react';
import Home from '../pages';


describe('Landing page testing', () => {
  it('should test some component from landing page', () => {
    const { asFragment } = render(<Home />)

  })
})
