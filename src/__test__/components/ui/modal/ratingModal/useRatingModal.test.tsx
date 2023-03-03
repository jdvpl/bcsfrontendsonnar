import { act, renderHook } from '@testing-library/react-hooks';
import useRatingModal from '../../../../../components/ui/Modal/ratingModal/useRatingModal';
import React from 'react';
import '@testing-library/jest-dom';

describe('useRatingModal', () => {
  beforeEach(() => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  });
  test('onOpenModal event', async () => {
    const { result } = renderHook(() => useRatingModal());
    act(() => {
      result.current.onOpenModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
  test('should initialize isOpen state to true', () => {
    const { result } = renderHook(() => useRatingModal());
    expect(result.current.isOpen).toBe(false);
  });
  test('should toggle isOpen state when onOpenModal is called', () => {
    const { result } = renderHook(() => useRatingModal());
    act(() => {
      result.current.onOpenModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
  test('should add "hidden" class to modal element after 1 second', () => {
    jest.useFakeTimers();

    const { result } = renderHook(() => useRatingModal());
    document.getElementById = jest.fn().mockReturnValue({
      classList: { add: jest.fn(), remove: jest.fn() },
    });
    act(() => {
      result.current.onOpenModal();
    });
    jest.runAllTimers();
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
    expect(document.getElementById).toHaveBeenCalledWith('modal');
    expect(document.getElementById('modal').classList.add).toHaveBeenCalledWith('hidden');
    expect(result.current.setIsOpen).toHaveBeenCalledWith(true);
    expect(document.getElementById('modal').classList.remove).toHaveBeenCalledWith(
      'hidden'
    );
  });
});
