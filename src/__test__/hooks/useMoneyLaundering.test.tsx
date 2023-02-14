import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { createMockRouter } from '../utils/createMockRouter';
import { fetchSarlaft } from '../../services';
import useMoneyLaundering from '../../hooks/useMoneyLaundering';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routes } from '../../routes';

jest.mock('../../services');
const router = createMockRouter({});
const wrapper = ({ children }: any) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);

(fetchSarlaft as jest.Mock)
  .mockReturnValueOnce({
    response: {
      result: {
        customer_status: 'ALLOWED',
      },
    },
    error: false,
  })
  .mockReturnValueOnce({
    response: {
      result: {
        customer_status: 'RESTRICTED',
      },
    },
    error: false,
  })
  .mockReturnValueOnce({
    response: {
      result: {
        customer_status: 'RESTRICTED',
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      result: {
        customer_status: 'DEFAULTSWITCH',
      },
    },
    error: false,
  });

describe('useSummaryApplication', () => {
  test('switch when is ALLOWED', async () => {
    const { result } = renderHook(() => useMoneyLaundering(), { wrapper });
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is RESTRICTED', async () => {
    const { result } = renderHook(() => useMoneyLaundering(), { wrapper });
    act(() => {
      result.current.onSubmit();
    });
  });
  test('Switch when is ERROR ', async () => {
    const { result } = renderHook(() => useMoneyLaundering(), { wrapper });
    act(() => {
      result.current.onSubmit();
    });
  });
  test('Switch Default', async () => {
    const { result } = renderHook(() => useMoneyLaundering(), { wrapper });
    act(() => {
      result.current.onSubmit();
    });
  });
  test('changeMoneyLaundering Default', async () => {
    const { result } = renderHook(() => useMoneyLaundering(), { wrapper });
    act(() => {
      result.current.changeMoneyLaundering('incomeSource', false);
    });
    expect(result.current.moneyLaundering.incomeSource).toBe(false);
  });
});
