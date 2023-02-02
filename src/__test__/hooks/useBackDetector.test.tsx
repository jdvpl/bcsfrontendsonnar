import '@testing-library/jest-dom';
import { useBackDetector } from '../../hooks/useBackDetector'
import { renderHook, act } from '@testing-library/react-hooks';

describe('useBackDetector', () => {
  beforeEach(() => {
    window.location.hash = '';
    window.onhashchange = null;
  });

  afterEach(() => {
    window.location.hash = '';
    window.onhashchange = null;
  });

  it('should set the hash to "#" if asPath includes "#"', () => {
    const fn = jest.fn();
    const mockUseRouter = () => ({
      asPath: 'somepath#hash',
    });

    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(mockUseRouter);

    renderHook(() => useBackDetector(fn, '/datos-personales/#'),);

    expect(window.location.hash).toBe('#/');
  });

  it('should call fn when the hash changes if asPath includes "#"', () => {
    const fn = jest.fn();


    jest.spyOn(require('next/router'), 'useRouter').mockImplementation('/datos-personales/#/');

    renderHook(() => useBackDetector(fn, '/datos-personales'),);

    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(fn).not.toHaveBeenCalled();
  });

  it('should set the hash to "#" if asPath does not include "#"', () => {
    const fn = jest.fn();
    const mockUseRouter = () => ({
      asPath: 'somepath',
    });

    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(mockUseRouter);

    renderHook(() => useBackDetector(fn, '/datos-personales'),);

    expect(window.location.hash).toBe('#/');
  });

  it('should not call fn when the hash changes if asPath does not include "#"', () => {
    const fn = jest.fn();
    const mockUseRouter = () => ({
      asPath: 'somepath',
    });

    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(mockUseRouter);

    renderHook(() => useBackDetector(fn, '/datos-personales'),);

    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(fn).not.toHaveBeenCalled();
  });
});