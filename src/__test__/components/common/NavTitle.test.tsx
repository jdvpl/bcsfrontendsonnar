import { render, screen, waitFor } from '@testing-library/react';
import NavTitle from '../../../components/commons/NavTitle';
import userEvent from "@testing-library/user-event";

import React from 'react'

const mkFn = jest.fn().mockReturnValueOnce(true)
describe('NavTitle', () => {
  it('should render "NavTitle" successfully', () => {
    const { baseElement } = render(<NavTitle />);
    expect(baseElement).toBeTruthy();
  });
  it('should call the onClick', async () => {
    render(<NavTitle onClick={mkFn} />);
    const result = mkFn();
    await waitFor(() => userEvent.click(screen.getByTestId('backButton')));
    expect(result).toBe(true);
  });

});
