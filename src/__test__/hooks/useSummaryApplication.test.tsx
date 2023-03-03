import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useSummaryApplication from '../../hooks/useReviewApplication';
import { createMockRouter } from '../utils/createMockRouter';
import { riskBoxes } from '../../services';
import { routes } from '../../routes';

jest.mock('../../services');
(riskBoxes as jest.Mock).mockReturnValueOnce({
  response: {
    result: '',
  },
  error: false,
});
const router = createMockRouter({});

const fcmk = jest.fn()
describe('useSummaryApplication', () => {
  test('should render text when call renderBody when case 0 ', async () => {
    const { result } = renderHook(() => useSummaryApplication(router, fcmk));
    act(() => {
      result.current.onSubmit();
    });
    expect(result.current.isLoading).toBe(false);
  });


});
