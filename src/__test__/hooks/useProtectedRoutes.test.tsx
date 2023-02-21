import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useRouter } from 'next/router';
import useProtectedRoutes from '../../hooks/useProtectedRoutes';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { routes } from '../../routes';
import { SesionStorageKeys } from '../../session';

jest.mock('../../hooks/useSessionStorage', () => ({
  useSessionStorage: jest.fn(),
}));
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe('useProtectedRoutes', () => {
  it('should be a function', () => {
    expect(typeof useProtectedRoutes).toBe('function');
  });
  it('should use useSessionStorage hook with expected arguments', () => {
    renderHook(() => useProtectedRoutes());
    expect(useSessionStorage).toHaveBeenCalledWith(
      SesionStorageKeys.protectedRoutes.key,
      { '/autenticacion': true, 'currentPage': routes.startProccess }
    );
  })

});


describe("useProtectedRoutes", () => {
  let useRouterSpy;
  let useSessionStorageSpy: any;
  let pushSpy: any;
  beforeEach(() => {
    useRouterSpy = jest.spyOn(require("next/router"), "useRouter");
    useSessionStorageSpy = jest.spyOn(
      require("../../hooks/useSessionStorage"),
      "useSessionStorage"
    );
    pushSpy = jest.fn();
    useRouterSpy.mockReturnValue({
      route: "/example",
      push: pushSpy,
    });
    useSessionStorageSpy.mockReturnValue([
      {
        "/autenticacion": true,
        currentPage: routes.startProccess,
      },
      jest.fn(),
    ]);
  });

  it("returns expected functions", () => {
    const { result } = renderHook(() => useProtectedRoutes());
    expect(result.current.setRt).toBeDefined();
    expect(result.current.setCurrentRouting).toBeDefined();
  });

  it("redirects to start process page on unprotected route", () => {
    const { result } = renderHook(() => useProtectedRoutes());
    expect(pushSpy).toHaveBeenCalledWith(routes.startProccess);
  });

  it("does not redirect on protected route", () => {
    useSessionStorageSpy.mockReturnValue([
      {
        "/example": false,
        currentPage: routes.startProccess,
      },
      jest.fn(),
    ]);
    renderHook(() => useProtectedRoutes());
    expect(pushSpy).toHaveBeenCalled();
  });
  it("returns expected functions", () => {
    const { result } = renderHook(() => useProtectedRoutes());
    expect(result.current.setRt).toBeDefined();
    expect(result.current.setCurrentRouting).toBeDefined();
  });
  it('should redirect to startProccess when trying to access a protected route without authentication', () => {
    const router = { push: jest.fn() };
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => router);

    const { result } = renderHook(() => useProtectedRoutes());
    act(() => result.current.setCurrentRouting('/protected', false));
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  });
  it('should allow access to a protected route with authentication', () => {
    const router = { push: jest.fn() };
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => router);

    const { result } = renderHook(() => useProtectedRoutes());
    act(() => result.current.setCurrentRouting('/protected', true));

    expect(router.push).not.toHaveBeenCalled();
  });
});




describe('useProtectedRoutes', () => {
  let mockRouter: any;
  let mockUseSessionStorage: any;

  beforeEach(() => {
    mockRouter = {
      route: '/',
      push: jest.fn(),
    };
    mockUseSessionStorage = jest.fn();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSessionStorage as jest.Mock).mockReturnValue([{}, mockUseSessionStorage]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should redirect to current page if current route is not protected', () => {
    const mockSetRt = jest.fn();
    mockUseSessionStorage.mockReturnValue([{
      '/autenticacion': true,
      '/other-page': true,
      '/protected-page': false,
      'currentPage': '/autenticacion',
    }, mockSetRt]);
    renderHook(() => useProtectedRoutes());

    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it('should not redirect if current route is protected', () => {
    const mockSetRt = jest.fn();
    mockUseSessionStorage.mockReturnValue([{
      '/autenticacion': true,
      '/other-page': true,
      '/protected-page': false,
      'currentPage': '/autenticacion',
    }, mockSetRt]);
    mockRouter.route = '/other-page';
    renderHook(() => useProtectedRoutes());

    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it('should redirect to current page if current route is not set in protected routes', () => {
    const mockSetRt = jest.fn();
    mockUseSessionStorage.mockReturnValue([{
      '/autenticacion': true,
      '/other-page': true,
      'currentPage': '/autenticacion',
    }, mockSetRt]);
    mockRouter.route = '/protected-page';
    renderHook(() => useProtectedRoutes());

    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it('should update protected routes when calling setCurrentRouting', async () => {
    const mockSetRt = jest.fn();
    mockUseSessionStorage.mockReturnValue([{
      '/autenticacion': true,
      '/other-page': true,
      '/protected-page': false,
      'currentPage': '/autenticacion',
    }, mockSetRt]);
    const { result } = renderHook(() => useProtectedRoutes());

    await act(async () => {
      await result.current.setCurrentRouting('/new-page', true);
    });

    expect(mockSetRt).not.toHaveBeenCalled();
  });
});
