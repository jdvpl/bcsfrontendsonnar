import { onSubmitResponse } from '../../../hooks/functions';
import { sendQuestions } from '../../../services';
jest.mock('../../../services');

sendQuestions
  .mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'VQ-01',
    },
  })
  .mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'VQ-02',
    },
  })
  .mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'VQ-03',
    },
  })
  .mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'VQ-04',
    },
  })
  .mockReturnValueOnce({
    error: false,
    response: {
      data: 'AUTH',
    },
  })
  .mockReturnValueOnce({
    error: false,
    response: {
      data: 'VQ',
    },
  });

describe('', () => {
  test('', async () => {
    let initData: any;
    let dataTU: any;
    let router: any;
    let setDataValid: any;
    let setDataNumber: any;
    let sendQuestions: any;
    initData = {
      document_type: 'CC',
      document_number: '12345678',
    };
    dataTU = {
      document_type: 'CC',
      document_number: '12345678',
    };
    router = {
      push: jest.fn(),
    };
    setDataValid = jest.fn();
    setDataNumber = jest.fn();
    sendQuestions = jest.fn();
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);
  });
  test('', async () => {
    let initData: any;
    let dataTU: any;
    let router: any;
    let setDataValid: any;
    let setDataNumber: any;
    let sendQuestions: any;
    initData = {
      document_type: 'CC',
      document_number: '12345678',
    };
    dataTU = {
      document_type: 'CC',
      document_number: '12345678',
    };
    router = {
      push: jest.fn(),
    };
    setDataValid = jest.fn();
    setDataNumber = jest.fn();
    sendQuestions = jest.fn();
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);
  });
  test('', async () => {
    let initData: any;
    let dataTU: any;
    let router: any;
    let setDataValid: any;
    let setDataNumber: any;
    let sendQuestions: any;
    initData = {
      document_type: 'CC',
      document_number: '12345678',
    };
    dataTU = {
      document_type: 'CC',
      document_number: '12345678',
    };
    router = {
      push: jest.fn(),
    };
    setDataValid = jest.fn();
    setDataNumber = jest.fn();
    sendQuestions = jest.fn();
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);
  });
  test('', async () => {
    let initData: any;
    let dataTU: any;
    let router: any;
    let setDataValid: any;
    let setDataNumber: any;
    let sendQuestions: any;
    initData = {
      document_type: 'CC',
      document_number: '12345678',
    };
    dataTU = {
      document_type: 'CC',
      document_number: '12345678',
    };
    router = {
      push: jest.fn(),
    };
    setDataValid = jest.fn();
    setDataNumber = jest.fn();
    sendQuestions = jest.fn();
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);
  });
  test('', async () => {
    let initData: any;
    let dataTU: any;
    let router: any;
    let setDataValid: any;
    let setDataNumber: any;
    let sendQuestions: any;
    initData = {
      document_type: 'CC',
      document_number: '12345678',
    };
    dataTU = {
      document_type: 'CC',
      document_number: '12345678',
    };
    router = {
      push: jest.fn(),
    };
    setDataValid = jest.fn();
    setDataNumber = jest.fn();
    sendQuestions = jest.fn();
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);
  });
  test('', async () => {
    let initData: any;
    let dataTU: any;
    let router: any;
    let setDataValid: any;
    let setDataNumber: any;
    let sendQuestions: any;
    initData = {
      document_type: 'CC',
      document_number: '12345678',
    };
    dataTU = {
      document_type: 'CC',
      document_number: '12345678',
    };
    router = {
      push: jest.fn(),
    };
    setDataValid = jest.fn();
    setDataNumber = jest.fn();
    sendQuestions = jest.fn();
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);
  });
});
