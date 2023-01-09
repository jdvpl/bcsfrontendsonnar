import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useSummaryApplication from '../../hooks/useReviewApplication';

describe('useSummaryApplication', () => {
  test.only('should render text when call renderBody when case 0 ', async () => {
    const { result } = renderHook(() => useSummaryApplication());
    act(() => {
      result.current.onSubmit();
    });
    expect(result.current.isLoading).toBe(true);
  });
});
