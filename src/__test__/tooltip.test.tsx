import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ToolTipInfo } from '../components/ui/Tooltip/index';

const infohtml = <h1>hola</h1>;

describe('Visibility of the Tooltip and info', () => {
  it('the value of info and button is equal to the one assigned ', async () => {
    render(<ToolTipInfo info="" infohtml={infohtml} id="test" icon="as" absolute padding />);
    const btnTooltip = screen.getByTestId(`btn-tooltip-test`);
    expect(btnTooltip).toHaveTextContent('as');
    await waitFor(() => {
      userEvent.hover(btnTooltip);
    });
    const infoText = await screen.findByText("hola");
    expect(infoText).toBeInTheDocument();
  });

  it('the value of info and button is equal to the one assigned ', async () => {
    render(<ToolTipInfo info="" infohtml={infohtml} id="test" icon="as" absolute padding={false} />);
    const btnTooltip = screen.getByTestId(`btn-tooltip-test`);
    expect(btnTooltip).toHaveTextContent('as');
    await waitFor(() => {
      userEvent.hover(btnTooltip);
    });
    const infoText = await screen.findByText("hola");
    expect(infoText).toBeInTheDocument();
  });
});
