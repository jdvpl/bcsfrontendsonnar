import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useConsultancyTutorial from '../../../../components/custom/tutorial/ConsultancyTutorial/useConsultancyTutorial';
import React from 'react'
describe('ConsultancyTutorial', () => {
  test('isOpen state change to False when call onHandleModal to first time ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.onHandleModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
  test('should change actualTutorialStep to 1 when call handelActualStep one time ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    expect(result.current.actualTutorialStep).toBe(1);
  });
  test('should change actualTutorialStep to 2 when call handelActualStep two time ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    expect(result.current.actualTutorialStep).toBe(2);
  });
  test('should change actualTutorialStep to 3 when call handelActualStep three time ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    expect(result.current.actualTutorialStep).toBe(3);
  });

  test('should render text when call renderBody when case 0 ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    let caseResult = ``;
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      caseResult = result.current.renderBody();
    });
    expect(caseResult.props.children[0].props.children).toBe(
      'Acompáñenos en un corto recorrido antes de iniciar la guía interactiva y conozca como navegar en ella.'
    );
  });
  test('should render text when call renderBody when case 2 ', async () => {
    // const container = (document.body.innerHTML = prevString);
    const element = {
      offsetLeft: 0,
      offsetWidth: 0,
      offsetTop: 0,
      offsetHeight: 0,
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
      },
    };

    const nextTutorialStepRef = {
      current: { ...element, querySelector: () => ({ ...element }) },
    };
    const prevTutorialStepRef = {
      current: { ...element, querySelector: () => ({ ...element }) },
    };
    let caseResult = ``;
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });

    act(() => {
      caseResult = result.current.renderBody();
    });

    expect(caseResult?.props?.children[0]?.props?.className).toBe(
      'absolute w-[253px] md:hidden xs:block'
    );
  });
  test('should render text when call renderBody when case 3 ', async () => {
    const element = {
      offsetLeft: 0,
      offsetWidth: 0,
      offsetTop: 0,
      offsetHeight: 0,
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
      },
    };

    const nextTutorialStepRef = {
      current: { ...element, querySelector: () => ({ ...element }) },
    };
    const prevTutorialStepRef = {
      current: { ...element, querySelector: () => ({ ...element }) },
    };
    let caseResult = ``;
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });

    act(() => {
      caseResult = result.current.renderBody();
    });

    expect(caseResult?.props?.children[0]?.props?.className).toBe(
      'flex flex-col gap-y-3 md:w-[253px] sm:w-[343px] xs:w-[288px] md:order-1 xs:order-2'
    );
  });
  test('should render text when call renderBody when case 3 ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    let caseResult = ``;
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      caseResult = result.current.renderBody();
    });

    expect(caseResult.props.children[0].props.className).toBe(
      'flex flex-col gap-y-3 md:w-[253px] sm:w-[343px] xs:w-[288px] md:order-1 xs:order-2'
    );
  });
  test('should render text when call renderBody when case 4 ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    let caseResult = ``;
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      caseResult = result.current.renderBody();
    });

    // console.log(caseResult.props.children.props.className);
    expect(caseResult.props.children.props.className).toBe(
      'h-full w-full flex md:flex-row xs:flex-col justify-center items-center gap-[10px]'
    );
  });

  test('should render text when call renderBody when case 5 ', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    let caseResult = ``;
    const { result } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      result.current.handelActualStep();
    });
    act(() => {
      caseResult = result.current.renderBody();
    });

    expect(caseResult.props.children[0].props.className).toBe(
      'w-[48px] h-[48px] rounded-full mx-auto border-white border-[1px] flex justify-center items-center mb-[45px]'
    );
  });
  test('', async () => {
    const nextTutorialStepRef = '';
    const prevTutorialStepRef = '';
    const caseResult = ``;
    const { result, unmount } = renderHook(() =>
      useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef })
    );
    unmount();
  });
});
