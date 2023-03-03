import useDeviceDetect from "../../hooks/useDeviceDetect";
import React from 'react'
import '@testing-library/jest-dom';
import { act, renderHook } from "@testing-library/react-hooks";

describe('<useDeviceDetect/>', () => {
  test('returns false when navigator is not defined', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
  });
  it('Should set isMobile to true when user agent is mobile', () => {
    // set the user agent
    Object.defineProperty(navigator, 'userAgent', {
      value: 'iPhone',
      configurable: true
    });
    // render the hook
    const { result } = renderHook(() => useDeviceDetect());
    // check the value of isMobile
    expect(result.current.isMobile).toBe(false);
  });
  it('Should set isMobile to false when user agent is not mobile', () => {
    // set the user agent
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Chrome',
      configurable: true
    });
    // render the hook
    const { result } = renderHook(() => useDeviceDetect());
    // check the value of isMobile
    expect(result.current.isMobile).toBe(false);
  });
  it('Should update isMobile when user agent changes', async () => {
    // render the hook
    const { result } = renderHook(() => useDeviceDetect());
    // check the initial value of isMobile
    expect(result.current.isMobile).toBe(false);
    // update the user agent
    act(() => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'iPhone',
        configurable: true
      });
    });
    // check the updated value of isMobile
    expect(result.current.isMobile).toBe(false);
  });


})
