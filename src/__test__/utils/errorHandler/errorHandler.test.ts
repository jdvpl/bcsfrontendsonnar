import Router from 'next/router';
import { routes } from '../../../routes';
import { axiosErrorMiddleware, handlerDecrypt } from '../../../utils/axiosMiddleware';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

describe('axiosErrorMiddleware', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should redirect to the correct route when the internalCode is found', () => {
    const error = {
      response: {
        data: {
          internalCode: 'PF-01',
        },
      },
    };

    axiosErrorMiddleware(error).catch((e) => {
      expect(Router.push).toHaveBeenCalledWith(routes.errorValidacion);
      expect(e).toEqual(error);
    });
  });

  test('should redirect to the servicError route when the internalCode is not found', () => {
    const error = {
      response: {
        data: {
          internalCode: 'unknown-code',
        },
      },
    };

    axiosErrorMiddleware(error).catch((e) => {
      expect(Router.push).toHaveBeenCalledWith(routes.servicError);
      expect(e).toEqual(error);
    });
  });

  test('should respond with the same parameter send', () => {
    expect(handlerDecrypt('test')).toEqual('test');
  });
});
