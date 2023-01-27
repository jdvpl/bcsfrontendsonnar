import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useSummaryApplication from '../../hooks/useReviewApplication';
import { createMockRouter } from '../utils/createMockRouter';
import { riskBoxes } from '../../services';

jest.mock('../../services');
riskBoxes.mockReturnValueOnce({
  response: {
    result: '',
  },
  error: false,
});
const router = createMockRouter({});

describe('useSummaryApplication', () => {
  test('should render text when call renderBody when case 0 ', async () => {
    const { result } = renderHook(() => useSummaryApplication(router));
    act(() => {
      result.current.onSubmit();
    });
    expect(result.current.isLoading).toBe(true);
  });

});
