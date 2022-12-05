import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import view from '../../../components/biometria/prueba_document.view';

describe('Visibility RequerimentOne', () => {
  it('appear component', async () => {
    const me = { state: { message: 'ErrorMessage' }, start: () => { } };
    render(view(me));

    const titleOne = screen.getByText('ErrorMessage');

    expect(titleOne).toBeInTheDocument();
  });

  it('show btn start', async () => {
    const me = { state: { message: '' }, start: () => { } };
    render(view(me));

    const btnStart = screen.getByText('Start');

    expect(btnStart).toBeInTheDocument();
  });

  it('click btn start', async () => {
    const handleClick = jest.fn();
    const me = { state: { message: '' }, start: handleClick };
    render(view(me));

    const btnStart = screen.getByText('Start');
    fireEvent.click(btnStart);

    expect(handleClick).toBeCalled();
  });
});
