import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useAuthentication from '../../hooks/useAuthentication';
import { getQuestions } from '../../services';


jest.mock('../../services');
const fkMock = jest.fn();

(getQuestions as jest.Mock)
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'IV-05' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'IV-08' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'IV-09' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'PF-01' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'ER-00' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'ER-0' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'IV-02' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'RL-02' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 403,
      result: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'IV-03' };
        //   }, 1000);
      },
    },
    error: true,
  })
  .mockReturnValueOnce({
    response: {
      status: 402,
      data: {
        data: 'ALLOWED',
      },
      json: () => {
        //   setTimeout(() => {
        return { internal_code: 'IV-03' };
        //   }, 1000);
      },
    },
    error: false,
  });
// const router = createMockRouter({});
// const wrapper = ({ children }: any) => (
//   <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
// );
let setShowAnimation: jest.Mock;
let setValidated: jest.Mock;
let setDataQuestions: jest.Mock;
let router: any;
let dataUser: any;

describe('useAuthentication', () => {
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock ,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
  test('switch when is ALLOWED', async () => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true,
    };
    const { result } = renderHook(() =>
      useAuthentication(
        setShowAnimation,
        setValidated,
        dataUser,
        setDataQuestions,
        router, fkMock,{}
      )
    );
    act(() => {
      result.current.onSubmit();
    });
  });
});
