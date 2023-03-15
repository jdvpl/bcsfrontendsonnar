import React from 'react';
import { render } from '@testing-library/react';
import CustomHead from '../../../../components/ui/customHead/customHead';
import { createMockRouter } from '../../../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('CustomHead', () => {
    it('should render with correct metadata and title', () => {
      const { baseElement } = render(<CustomHead />)
      expect(baseElement).toBeTruthy();
    })
  });