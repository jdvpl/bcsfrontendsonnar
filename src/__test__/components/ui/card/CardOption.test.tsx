import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'
import { CardOption } from '../../../../components/ui/Card/OptionCard';

const fn = jest.fn()
const options = [
  {
    id: '1',
    value: 'Proceso muy largo',
  },
  {
    id: '2',
    value: 'No me dió confianza',
  },
  {
    id: '3',
    value: 'No entendí qué debía hacer',
  },
  {
    id: '4',
    value: 'Faltó acompañamiento',
  },
  {
    id: '5',
    value: 'Otro',
  },
]
describe('Card', () => {
  let baseElement: any;
  beforeEach(() => {
    baseElement = render(<CardOption option={options[1]} actualOption={options[0]} onChangeActualOption={fn} />);
  });

  test('should render successfully', () => {
    expect(baseElement.baseElement).toBeTruthy();
  });

  test('should click on cardoption', async () => {
    const btnCardOptionTest = screen.getByRole('btnCardOptionTest');
    await waitFor(() => userEvent.click(btnCardOptionTest));

  })
});


