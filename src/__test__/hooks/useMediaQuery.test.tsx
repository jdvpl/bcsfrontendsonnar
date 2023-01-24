import useMediaQueryResponsive from '../../hooks/useMediaQuery'
import { useMediaQuery } from "react-responsive";
import { isSafari, isEdge, isFirefox, isOpera } from "react-device-detect";

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn()
}));

describe('useMediaQueryResponsive', () => {
  test('it should return the expected object', () => {
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    const result = useMediaQueryResponsive();
    expect(result).toEqual({
      isMobile: true,
      isTablet: false,
      isBrowser: false,
      isXS: false,
      isSM: false,
      isMD: false,
      isLG: false,
      heightHeader: '34',
      isSafari,
      isEdge,
      isFirefox,
      isOpera
    });
  });
  test('it should return the expected object browser', () => {
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    const result = useMediaQueryResponsive();
    expect(result.isBrowser).toBe(true);
  });
  test('it should return the expected object Tables', () => {
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    const result = useMediaQueryResponsive();
    expect(result.isTablet).toBe(true);
  });
  test('it should return the expected object xs', () => {
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    const result = useMediaQueryResponsive();
    expect(result.isXS).toBe(true);
  });
  test('it should return the expected md', () => {
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    const result = useMediaQueryResponsive();
    expect(result.isMD).toBe(true);
  });
  test('it should return the expected opera', () => {
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    const result = useMediaQueryResponsive();
    expect(result.isOpera).toBe(false);
  });
  test('it should return the expected safari', () => {
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    useMediaQuery.mockReturnValueOnce(true)
    const result = useMediaQueryResponsive();
    expect(result.isSafari).toBe(false);
  });
  test('it should return the expected header', () => {
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    useMediaQuery.mockReturnValueOnce(false)
    const result = useMediaQueryResponsive();
    expect(result.heightHeader).toBe("24");
  });
});