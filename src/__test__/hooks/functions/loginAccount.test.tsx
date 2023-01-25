import { loginAccount } from '../../../hooks/functions';
import { loginAccountSendRequest } from '../../../services';

jest.mock('../../../services');

loginAccountSendRequest
  .mockReturnValueOnce({
    error: false,
    response: {
      data: {
        state: 'OK',
      },
    },
  })
  .mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'AUTH-01',
    },
  })
  .mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'AUTH-02',
    },
  })
  .mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'AUTH-03',
    },
  });

describe('loginAccount', () => {
  test('', async () => {
    let dataSend = {
      password: 'hasdu',
    };
    let setIsLoading = jest.fn();
    let dataTU = {
      document_type: 'cc',
      document_number: '12321312021',
    };
    let router = {
      push: jest.fn(),
    };
    let setBorder = jest.fn();
    let setmessagePassword = jest.fn();
    let setlockedUser = jest.fn();
    let setDataTU = jest.fn();

    await loginAccount(
      dataSend,
      setIsLoading,
      dataTU,
      router,
      setBorder,
      setmessagePassword,
      setlockedUser,
      setDataTU
    );
  });
  test('', async () => {
    let dataSend = {
      password: 'hasdu',
    };
    let setIsLoading = jest.fn();
    let dataTU = {
      document_type: 'cc',
      document_number: '12321312021',
    };
    let router = {
      push: jest.fn(),
    };
    let setBorder = jest.fn();
    let setmessagePassword = jest.fn();
    let setlockedUser = jest.fn();
    let setDataTU = jest.fn();

    await loginAccount(
      dataSend,
      setIsLoading,
      dataTU,
      router,
      setBorder,
      setmessagePassword,
      setlockedUser,
      setDataTU
    );
    await loginAccount(
      dataSend,
      setIsLoading,
      dataTU,
      router,
      setBorder,
      setmessagePassword,
      setlockedUser,
      setDataTU
    );
    await loginAccount(
      dataSend,
      setIsLoading,
      dataTU,
      router,
      setBorder,
      setmessagePassword,
      setlockedUser,
      setDataTU
    );
  });
});
