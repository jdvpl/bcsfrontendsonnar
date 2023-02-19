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
    expect(result.current.isLoading).toBe(true);
  });

  it('should call riskBoxes with the expected parameters', async () => {
    jest.resetAllMocks();
    jest.mock('../../services', () => ({
      riskBoxes: jest.fn(() => Promise.resolve({ error: false }))
    }));
    const mockRouter = { push: jest.fn() };
    const { result } = renderHook(() => useSummaryApplication(mockRouter, fcmk));

    await act(async () => {
      result.current.onSubmit();
    });

    expect(riskBoxes).toHaveBeenCalledWith({});
  });

  it('should navigate to the approvalDataPage when there is no error', async () => {
    jest.resetAllMocks();
    jest.mock('../../services', () => ({
      riskBoxes: jest.fn(() => Promise.resolve({ error: false }))
    }));
    const mockRouter = { push: jest.fn() };
    const { result } = renderHook(() => useSummaryApplication(mockRouter, fcmk));

    await act(async () => {
      result.current.onSubmit();
    });

    expect(mockRouter.push).toHaveBeenCalledWith(routes.approvalDataPage);
  });
  it('should not navigate to the approvalDataPage when there is an error', async () => {
    jest.resetAllMocks();
    const mockRouter = { push: jest.fn() };

    jest.mock('../../services', () => ({
      riskBoxes: jest.fn(() => Promise.resolve({ error: true }))
    }));

    const { result } = renderHook(() => useSummaryApplication(mockRouter, fcmk));

    await act(async () => {
      result.current.onSubmit();
    });

    expect(mockRouter.push).toHaveBeenCalledWith(routes.approvalDataPage);
  });
});
