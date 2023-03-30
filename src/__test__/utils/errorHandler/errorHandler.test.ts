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

  test('should redirect to the correct route when the internal_code is found', () => {
    const error = {
      response: {
        data: {
          internal_code: 'PF-01',
        },
      },
    };

    axiosErrorMiddleware(error).catch((e) => {
      expect(Router.push).toHaveBeenCalledWith(routes.errorValidacion);
      expect(e).toEqual(error);
    });
  });

  test('should redirect to the servicError route when the internal_code is not found', () => {
    const error = {
      response: {
        data: {
          internal_code: 'unknown-code',
        },
      },
    };

    axiosErrorMiddleware(error).catch((e) => {
      expect(Router.push).toHaveBeenCalledWith(routes.servicError);
      expect(e).toEqual(error);
    });
  });
});

// describe('handlerDecrypt', () => {
//   test('should return the decrypted response', () => {
//     const KEY = 'secret';
//     const response = {
//       data: {
//         data: 'encrypted-data',
//       },
//     };
//     const decryptedData = '{"foo": "bar"}';

//     jest.spyOn(global.JSON, 'parse').mockReturnValue(JSON.parse(decryptedData));
//     jest.spyOn(global, 'decryptPass').mockReturnValue(decryptedData);

//     const decryptedResponse = handlerDecrypt(response);

//     expect(global.decryptPass).toHaveBeenCalledWith(response.data.data, KEY);
//     expect(global.JSON.parse).toHaveBeenCalledWith(decryptedData);
//     expect(decryptedResponse).toEqual(response);

//     global.JSON.parse.mockRestore();
//     global.decryptPass.mockRestore();
//   });
// });
