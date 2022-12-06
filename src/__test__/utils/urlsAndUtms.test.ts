import { renderHook } from '@testing-library/react-hooks';
import { useRouter } from 'next/router';
import { urlAndUtms } from '../../utils/RouterUtmsUrl';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Router utms url', () => {
  it('should be able to push url and utms', () => {
    const router = {
      push: jest.fn(),
      query: {
        utm_source: 'bcs',
        utm_medium: 'test',
        utm_campaign: 'bcs-test',
      },
    };

    (useRouter as jest.Mock).mockReturnValue(router);

    const { result } = renderHook(() => useRouter());

    urlAndUtms(result.current, '/');

    expect(result.current.push).toHaveBeenCalledWith({
      pathname: '/',
      query: {
        utm_source: 'bcs',
        utm_medium: 'test',
        utm_campaign: 'bcs-test',
      },
    });
  });
});
