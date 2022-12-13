import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react'
import PersonalData from '../../pages/datos-personales';
import { createMockRouter } from '../utils/createMockRouter';
import { routes } from '../../routes';


describe('PersonalData', () => {
  it('should render "PersonalData" successfully', () => {
    const { baseElement } = render(<PersonalData />);
    expect(baseElement).toBeTruthy();
  });
});