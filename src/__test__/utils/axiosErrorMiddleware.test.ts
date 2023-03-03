import axios, { AxiosInstance, AxiosError } from 'axios';
import Router from 'next/router';
import { axiosErrorMiddleware } from '../../utils';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

describe('axiosErrorMiddleware', () => {
  let axiosInstance: AxiosInstance;
  let spy: jest.SpyInstance;

  beforeEach(() => {
    axiosInstance = axios.create();
    spy = jest.spyOn(Router, 'push');
  });

  afterEach(() => {
    spy.mockReset();
  });

  it('handles a 500 error', () => {
    const error = {
      response: {
        status: 500,
      },
    } as AxiosError;

    const result = axiosErrorMiddleware(axiosInstance)(error);

    expect(spy).toHaveBeenCalledWith('/validacion/error-servicio');
    result.catch((e) => {
      expect(e).toEqual(error);
    });
  });

  it('handles a non-200 error', () => {
    const error = {
      response: {
        status: 400,
      },
    } as AxiosError;

    const result = axiosErrorMiddleware(axiosInstance)(error);

    expect(spy).not.toHaveBeenCalled();
    result.catch((e) => {
      expect(e).toEqual(error);
    });
  });
});
