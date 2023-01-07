import { routes } from "../../routes";
import { onSubmitResponse } from "../../func/functions";

describe('onSubmitResponse', () => {
  let initData: any;
  let dataTU: any;
  let router: any;
  let setDataValid: any;
  let setDataNumber: any;
  let sendQuestions: any;

  beforeEach(() => {
    // Inicializar variables aquí
    initData = {
      document_type: 'CC',
      document_number: '12345678'
    };
    dataTU = {
      document_type: 'CC',
      document_number: '12345678'
    };
    router = {
      push: jest.fn()
    };
    setDataValid = jest.fn();
    setDataNumber = jest.fn();
    sendQuestions = jest.fn();
  });

  it('should navigate to startProccess route if response has error with VQ-01 code', async () => {
    sendQuestions.mockResolvedValue({
      error: true,
      response: {
        internal_code: 'VQ-01'
      }
    });

    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);

    expect(setDataValid).not.toHaveBeenCalled();
    expect(setDataNumber).not.toHaveBeenCalled();
  });

  it('should navigate to validacionErrorValidacionIdentidad route if response has error with VQ-02 code', async () => {
    sendQuestions.mockResolvedValue({
      error: true,
      response: {
        internal_code: 'VQ-02'
      }
    });

    await onSubmitResponse(initData, dataTU, router, setDataValid, setDataNumber);

    expect(setDataValid).not.toHaveBeenCalled();
    expect(setDataNumber).not.toHaveBeenCalled();
  });
});