import React from 'react';
import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useInactivityModal from '../../../../../components/ui/Modal/inactivityModal/useInactivityModal';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../../utils/createMockRouter';
import { routes } from '../../../../../routes';

const router = createMockRouter({});
const wrapper = ({ children }: any) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);

describe('useInactivityModal', () => {
  test('onCloseModal event', async () => {
    const { result } = renderHook(() => useInactivityModal());
    act(() => {
      result.current.onCloseModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
  test('handleOnActive event', async () => {
    const { result } = renderHook(() => useInactivityModal());
    act(() => {
      result.current.handleOnActive();
    });
    expect(result.current.isIdle).toBe(false);
  });
  test('handleOnIdle event', async () => {
    const { result } = renderHook(() => useInactivityModal());
    act(() => {
      result.current.handleOnIdle();
    });
    expect(result.current.isIdle).toBe(true);
  });
  test('closeProcess event', async () => {
    const { result } = renderHook(() => useInactivityModal(), { wrapper });
    act(() => {
      result.current.closeProcess();
    });
    expect(router.push).toHaveBeenCalledWith(routes.inactivityScreen);
  });
  test('handleOnIdle event', async () => {
    const { result } = renderHook(() => useInactivityModal(), { wrapper });
    act(() => {
      result.current.handleExit();
    });
    expect(router.push).toHaveBeenCalledWith(routes.inactivityScreen);
  });
  test('getOutToHome event', async () => {
    const { result } = renderHook(() => useInactivityModal(), { wrapper });
    act(() => {
      result.current.getOutToHome();
    });
    expect(router.push).toHaveBeenCalledWith(routes.home);
  });
});
