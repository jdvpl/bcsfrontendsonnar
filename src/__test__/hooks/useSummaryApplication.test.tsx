import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useSummaryApplication from '../../hooks/useReviewApplication';

const rt = jest.mock;
describe('useSummaryApplication', () => {
  test('should render text when call renderBody when case 0 ', async () => {
    const { result } = renderHook(() => useSummaryApplication(rt));
    act(() => {
      result.current.onSubmit();
    });
    expect(result.current.isLoading).toBe(true);
  });
});
