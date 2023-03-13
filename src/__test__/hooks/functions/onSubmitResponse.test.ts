import { onSubmitResponse } from '../../../hooks/functions';
import { sendQuestions } from '../../../services';
jest.mock('../../../services');

(sendQuestions as jest.Mock)
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
      data: { "clientBasicData": { "firstName": "JUAN CAMILO", "lastName": "HERNANDEZ SILVA", "fullName": "JUAN CAMILO HERNANDEZ SILVA", "documentNumber": "1022404222", "documentType": "CC", "email": "", "cellPhone": "", "phone": "", "birthDay": "", "address": "", "birthCity": "", "residenceCity": "", "status": 200 }, "isClient": true, "question": { "step": "AUTH", "key": "b92a1017-0aa9-4cd6-a90e-95cb5c96a648", "type": "CLOSED-QUESTION", "description": "Seleccione su número de celular", "options": [{ "id": "bea732f3-0d2a-4cba-93ed-b1aeffc1a149", "option": "3017●●●●31" }, { "id": "7a9624ff-fddb-4663-aa5e-94592c22452f", "option": "3171●●●●95" }, { "id": "30c2c9af-f6ce-4ce9-8551-c3cd88172986", "option": "3165●●●●94" }, { "id": "ec7ce2be-0113-4ab5-974c-846ae70fad7e", "option": "Ninguno" }] }, "clientType": "HAVE_DIGITAL_CHANNELS" },
    },
  });

const setDataBasicUser = jest.fn();
const setCurrentRouting = jest.fn();
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
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber, setCurrentRouting, setDataBasicUser,jest.fn());
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
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber, setCurrentRouting, setDataBasicUser,jest.fn());
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
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber, setCurrentRouting, setDataBasicUser,jest.fn());
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
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber, setCurrentRouting, setDataBasicUser,jest.fn());
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
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber, setCurrentRouting, setDataBasicUser,jest.fn());
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
    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber, setCurrentRouting, setDataBasicUser,jest.fn());
  });
});
