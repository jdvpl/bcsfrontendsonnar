import useOtp from '../../../../components/custom/otp/useOtp';


const dataQuestions = { processId: 'PRE00000023' }
const setCurrentRouting = jest.fn();
describe('useOtp when onValidateOTP fetch is successfully', () => {
  let dataTU;
  let otp;
  let wasResend;
  let reSendOTPCode;
  let validateOTOCode: any;
  let timer;
  let setIsLoading: any;
  let setIsValid: any;
  let setError: any;
  let setWasResend: any;

  beforeEach(async () => {
    setIsLoading = jest.fn();
    setIsValid = jest.fn();
    setError = jest.fn();
    setWasResend = jest.fn();
    jest.resetAllMocks();
    dataTU = {
      document_number: 'dataTU?.document_number',
      document_type: 'dataTU?.document_type',
      pin: '123456',
    };
    otp = '123456';
    wasResend = false;

    reSendOTPCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: true,
      })
    );

    validateOTOCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: false,
      })
    );

    timer = 60;
    const { onValidateOTP } = useOtp({
      setIsLoading,
      dataTU,
      otp,
      setIsValid,
      setError,
      wasResend,
      setWasResend,
      timer,
      reSendOTPCode,
      validateOTOCode,
      dataQuestions,
      setCurrentRouting
    });
    await onValidateOTP();
  });
  it('setIsValid should call 1 time', async () => {
    expect(setIsValid.mock.calls.length).toBe(1);
  });
  it('setIsValid should call with true', async () => {
    expect(setIsValid.mock.lastCall[0]).toBe(true);
  });
  it('setIsLoading should call 2 times', async () => {
    expect(setIsLoading.mock.calls.length).toBe(2);
  });
  it('validateOTOCode should call 1 time', async () => {
    expect(validateOTOCode.mock.calls.length).toBe(1);
  });
  it('setError should not call', async () => {
    expect(setError.mock.calls.length).toBe(0);
  });
});

describe('useOtp when onValidateOTP fetch is error ', () => {
  let dataTU;
  let otp;
  let wasResend;
  let reSendOTPCode;
  let validateOTOCode: any;
  let timer;
  let setIsLoading: any;
  let setIsValid: any;
  let setError: any;
  let setWasResend: any;

  beforeEach(async () => {
    setIsLoading = jest.fn();
    setIsValid = jest.fn();
    setError = jest.fn();
    setWasResend = jest.fn();
    jest.resetAllMocks();
    dataTU = {
      document_number: 'dataTU?.document_number',
      document_type: 'dataTU?.document_type',
      pin: '123456',
    };
    otp = '123456';
    wasResend = false;

    reSendOTPCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: true,
      })
    );

    validateOTOCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: true,
      })
    );

    timer = 60;
    const { onValidateOTP } = useOtp({
      setIsLoading,
      dataTU,
      otp,
      setIsValid,
      setError,
      wasResend,
      setWasResend,
      timer,
      reSendOTPCode,
      validateOTOCode,
      dataQuestions,
      setCurrentRouting
    });
    await onValidateOTP();
  });
  it('setIsValid should not call', async () => {
    expect(setIsValid.mock.calls.length).toBe(0);
  });
  it('setIsLoading should call 2 times', async () => {
    expect(setIsLoading.mock.calls.length).toBe(2);
  });
  it('validateOTOCode should call 1 time', async () => {
    expect(validateOTOCode.mock.calls.length).toBe(1);
  });
  it('setError should call 1 time', async () => {
    expect(setError.mock.calls.length).toBe(1);
  });
});

describe('useOtp when onResendOTP fetch is successfully', () => {
  let dataTU;
  let otp;
  let wasResend;
  let reSendOTPCode: any;
  let validateOTOCode: any;
  let timer;
  let setIsLoading: any;
  let setIsValid: any;
  let setError: any;
  let setWasResend: any;

  beforeEach(async () => {
    setIsLoading = jest.fn();
    setIsValid = jest.fn();
    setError = jest.fn();
    setWasResend = jest.fn();
    jest.resetAllMocks();
    dataTU = {
      document_number: 'dataTU?.document_number',
      document_type: 'dataTU?.document_type',
      pin: '123456',
    };
    otp = '123456';
    wasResend = false;

    reSendOTPCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: false,
      })
    );

    validateOTOCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: false,
      })
    );

    timer = 0;
    const { onResendOTP } = useOtp({
      setIsLoading,
      dataTU,
      otp,
      setIsValid,
      setError,
      wasResend,
      setWasResend,
      timer,
      reSendOTPCode,
      validateOTOCode,
      dataQuestions,
      setCurrentRouting
    });
    await onResendOTP();
  });
  it('setIsLoading should call 2 times', async () => {
    expect(setIsLoading.mock.calls.length).toBe(2);
  });
  it('reSendOTPCode should call 1 time', async () => {
    expect(reSendOTPCode.mock.calls.length).toBe(1);
  });
  it('setError should not call', async () => {
    expect(setError.mock.calls.length).toBe(0);
  });
  it('setWasResend should call 1 time', async () => {
    expect(setWasResend.mock.calls.length).toBe(1);
  });
  it('setWasResend should call with true', async () => {
    expect(setWasResend.mock.lastCall[0]).toBe(true);
  });
});

describe('useOtp when onResendOTP fetch is error ', () => {
  let dataTU;
  let otp;
  let wasResend;
  let reSendOTPCode: any;
  let validateOTOCode: any;
  let timer;
  let setIsLoading: any;
  let setIsValid: any;
  let setError: any;
  let setWasResend: any;

  beforeEach(async () => {
    setIsLoading = jest.fn();
    setIsValid = jest.fn();
    setError = jest.fn();
    setWasResend = jest.fn();
    jest.resetAllMocks();
    dataTU = {
      document_number: 'dataTU?.document_number',
      document_type: 'dataTU?.document_type',
      pin: '123456',
    };
    otp = '123456';
    wasResend = false;

    reSendOTPCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: true,
      })
    );

    validateOTOCode = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        response: {
          result: ' response.result,',
          data: '',
        },
        error: true,
      })
    );

    timer = 0;
    const { onResendOTP } = useOtp({
      setIsLoading,
      dataTU,
      otp,
      setIsValid,
      setError,
      wasResend,
      setWasResend,
      timer,
      reSendOTPCode,
      validateOTOCode,
      dataQuestions,
      setCurrentRouting
    });
    await onResendOTP();
  });
  it('setIsValid should not call', async () => {
    expect(setIsValid.mock.calls.length).toBe(0);
  });
  it('setIsLoading should call 2 times', async () => {
    expect(setIsLoading.mock.calls.length).toBe(2);
  });
});
