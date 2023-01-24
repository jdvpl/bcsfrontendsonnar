import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useRatingModal from '../../../../../components/ui/Modal/ratingModal/useRatingModal';

describe('useRatingModal', () => {
  test('onOpenModal event', async () => {
    const { result } = renderHook(() => useRatingModal());
    act(() => {
      result.current.onOpenModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
