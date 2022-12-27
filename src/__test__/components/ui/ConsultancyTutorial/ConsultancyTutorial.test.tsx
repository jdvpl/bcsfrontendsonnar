import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import ConsultancyTutorial from '../../../../components/custom/tutorial/ConsultancyTutorial/ConsultancyTutorial';
import userEvent from '@testing-library/user-event';

describe('ConsultancyTutorial', () => {
  test('should render "ConsultancyTutorial" successfully', () => {
    const { baseElement } = render(
      <ConsultancyTutorial nextTutorialStepRef="" prevTutorialStepRef="" />
    );
    expect(baseElement).toBeTruthy();
  });
  test('should handleModal close tutorial', async () => {
    render(
      <>
        <ConsultancyTutorial
          nextTutorialStepRef="{nextTutorialStepRef}"
          prevTutorialStepRef="{prevTutorialStepRef}"
        />
      </>
    );
    const buttonClose = screen.queryByTestId('button-close-tutorial-container');
    await waitFor(() => userEvent.click(buttonClose!));
    const tutorialContainer = screen.queryByTestId('tutorial-container');
    expect(tutorialContainer).not.toBeInTheDocument();
  });
});
