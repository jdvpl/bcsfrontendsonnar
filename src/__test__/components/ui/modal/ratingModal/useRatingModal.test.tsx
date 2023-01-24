import { act, renderHook } from '@testing-library/react-hooks';
import useRatingModal from '../../../../../components/ui/Modal/ratingModal/useRatingModal';
import React from 'react'
import '@testing-library/jest-dom';

describe('useRatingModal', () => {
  test('onOpenModal event', async () => {
    const { result } = renderHook(() => useRatingModal());
    act(() => {
      result.current.onOpenModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
  test('should add "hidden" class to modal element after 1 second', () => {
    jest.useFakeTimers();
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    const { onOpenModal } = useRatingModal();
    document.getElementById = jest.fn().mockReturnValue({
      classList: { add: jest.fn() },
    });
    onOpenModal();
    jest.runAllTimers();
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(document.getElementById).toHaveBeenCalledWith('modal');
    expect(document.getElementById('modal').classList.add).toHaveBeenCalledWith('hidden');
  });
});
