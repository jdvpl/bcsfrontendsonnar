import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react'
import userEvent from '@testing-library/user-event';
import ItemAccordion from '../../../../components/ui/Accordion/ItemAccordion';

const mkFn = jest.fn().mockReturnValueOnce('1')
describe('ItemAccordion component', () => {
  test('should render "ItemAccordion" successfully', async () => {
    const initialState = '1'
    const setSelected = jest.fn();
    React.useState = jest.fn().mockReturnValue([initialState, setSelected])
    jest.spyOn(React, 'useState').mockImplementation(setSelected)
    render(<ItemAccordion id="1" active={initialState === '1'} title="¿Cuales son los gastos adicionales al momento de comprar vivienda?" setSelected={setSelected}>
      <>
        Para el proceso de legalización es necesario contemplar los gastos de
        avalúo, estudio de títulos y escrituración. Si desea conocer más a cerca de
        estos conceptos, diríjase a nuestra
      </>
    </ItemAccordion>);
    const buttonItem = screen.getByRole('button');
    await waitFor(() => userEvent.click(buttonItem));
    setSelected('1')
    await waitFor(() => userEvent.pointer({ target: buttonItem, keys: '[Enter]' }));
    fireEvent.keyDown(buttonItem)
    fireEvent.focus(buttonItem)
    const result = mkFn();
    expect(result).toBe('1');
  });

});
