import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useSummaryApplication from '../../hooks/useReviewApplication';
import { createMockRouter } from '../utils/createMockRouter';
import { riskBoxes } from '../../services';
import useValidateAge from '../../hooks/useValidateAge';

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
    const day = '23';
    const month = '03';
    const year = '2000';
    const clearErrors = jest.fn();
    const setError = jest.fn();

    const { result } = renderHook(() =>
      useValidateAge(day, month, year, clearErrors, setError)
    );
    act(() => {
      result.current.validateAge();
    });
  });
  test('should render text when call renderBody when case 0 ', async () => {
    const day = '23';
    const month = '03';
    const year = '2010';
    const clearErrors = jest.fn();
    const setError = jest.fn();

    const { result } = renderHook(() =>
      useValidateAge(day, month, year, clearErrors, setError)
    );
    act(() => {
      result.current.validateAge();
    });
  });
});
