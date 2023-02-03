import { sendNumber } from '../../services';
import useValidationFormNumber from '../../hooks/useValidationFormNumber';
import { routes } from '../../routes';

jest.mock('../../services', () => ({
  sendNumber: jest.fn(() => Promise.resolve({
    error: false,
    response: {
      data: {
        phone: '555-555-5555'
      }
    }
  }))
}));

jest.useFakeTimers();
describe('useValidationFormNumber', () => {

  it('should call sendNumber with the correct body and set personalData and encript on success', async () => {
    const setDataTU = jest.fn();
    const setEncript = jest.fn();
    const setLoaded = jest.fn();
    const setProcessBiometry = jest.fn();
    const router = {
      push: jest.fn()
    };

    const dataTU = {
      document_type: 'CC',
      document_number: '12345678'
    };

    const formData = {
      number: '555-555-5555'
    };

    const { onSubmit } = useValidationFormNumber(dataTU, setDataTU, setEncript, setLoaded, router, setProcessBiometry);

    await onSubmit(formData);

    expect(sendNumber).toHaveBeenCalledWith({
      document_type: 'CC',
      document_number: '12345678',
      phone: '555-555-5555'
    });
    expect(setDataTU).toHaveBeenCalledWith({
      ...dataTU,
      personalData: {
        celular: '555-555-5555',
        phoneNumber: '555-555-5555'
      }
    });
    expect(setEncript).toHaveBeenCalledWith('555-555-5555');
  });
})


// second part of tests
describe("useValidationFormNumber", () => {
  const dataTU = {
    document_type: "CC",
    document_number: "12345678",
  };

  const setDataTU = jest.fn();
  const setEncript = jest.fn();
  const setLoaded = jest.fn();
  const setProcessBiometry = jest.fn();
  const router = {
    push: jest.fn(),
  };

  const formData = {
    number: "+1-555-555-5555",
  };

  const { onSubmit } = useValidationFormNumber(dataTU, setDataTU, setEncript, setLoaded, router, setProcessBiometry);

  it("calls sendNumber with the correct parameters", async () => {
    await onSubmit(formData);
    expect(sendNumber).toHaveBeenCalledWith({
      document_type: dataTU.document_type,
      document_number: dataTU.document_number,
      phone: formData.number,
    });
  });

  it("updates the dataTU state with the personalData", async () => {
    await onSubmit(formData);
    expect(setDataTU).toHaveBeenCalledWith({
      ...dataTU,
      personalData: {
        celular: "555-555-5555",
        phoneNumber: formData.number,
      },
    });
  });

  it("sets the encript state", async () => {
    await onSubmit(formData);
    expect(setEncript).toHaveBeenCalledWith(formData.number);
  });

  it("redirects to the OTP page after 1 second", async () => {
    await onSubmit(formData);
    jest.runAllTimers();
    expect(router.push).toHaveBeenCalledWith(routes.otp);
  });
});



// third describes block

jest.mock('next/router', () => ({
  push: jest.fn()
}));

describe('useValidationFormNumber', () => {
  const dataTU = {};
  const setDataTU = jest.fn();
  const setEncript = jest.fn();
  const setLoaded = jest.fn();
  const router = {
    push: jest.fn()
  };
  const setProcessBiometry = jest.fn();

  const { onSubmit } = useValidationFormNumber(
    dataTU,
    setDataTU,
    setEncript,
    setLoaded,
    router,
    setProcessBiometry
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set personalData in dataTU object when response is successful', async () => {
    const formData = { number: '555-555-5555' };

    await onSubmit(formData);

    expect(setDataTU).toHaveBeenCalledWith({
      ...dataTU,
      personalData: {
        celular: '555-555-5555',
        phoneNumber: '555-555-5555'
      }
    });
  });

  it('should set encript with the phone number when response is successful', async () => {
    const formData = { number: '555-555-5555' };

    await onSubmit(formData);

    expect(setEncript).toHaveBeenCalledWith('555-555-5555');
  });

  it('should redirect to `/` when response status is 403 and internal_code is `VQ-01`', async () => {
    const formData = { number: 123456 };
    sendNumber.mockImplementation(() => Promise.resolve({
      error: true,
      status: 403,
      response: {
        internal_code: 'VQ-01'
      }
    }));

    await onSubmit(formData);

    expect(router.push).toHaveBeenCalledWith('/');
  });
  it('should redirect to `/validacion-biometrica/` when response status is 403 and internal_code is `VQ-03`', async () => {
    const formData = { number: 123456 };
    sendNumber.mockImplementation(() => Promise.resolve({
      error: true,
      status: 403,
      response: {
        internal_code: 'VQ-03'
      }
    }));

    await onSubmit(formData);

    expect(router.push).toHaveBeenCalledWith('/validacion-biometrica/');
  });
  it('should redirect to `/validacion/error-validacionIdentidad/` when response status is 403 and internal_code is `PF-00`', async () => {
    const formData = { number: 123456 };
    sendNumber.mockImplementation(() => Promise.resolve({
      error: true,
      status: 403,
      response: {
        internal_code: 'PF-00'
      }
    }));

    await onSubmit(formData);

    expect(router.push).toHaveBeenCalledWith('/validacion/error-validacionIdentidad/');
  });
  it('should redirect to `/validacion/error-validacionSucursal` when response status is 403 and internal_code is `PF-02`', async () => {
    const formData = { number: 123456 };
    sendNumber.mockImplementation(() => Promise.resolve({
      error: true,
      status: 403,
      response: {
        internal_code: 'PF-02'
      }
    }));

    await onSubmit(formData);

    expect(router.push).toHaveBeenCalledWith('/validacion/error-validacionSucursal');
  });
  it('should redirect to `/validacion-biometrica/` when response status is 403 and internal_code is `PF-03`', async () => {
    const formData = { number: 123456 };
    sendNumber.mockImplementation(() => Promise.resolve({
      error: true,
      status: 403,
      response: {
        internal_code: 'PF-03'
      }
    }));

    await onSubmit(formData);

    expect(router.push).toHaveBeenCalledWith('/validacion-biometrica/');
  });
  it('should redirect to `/validacion-biometrica/` when response status is 403 and internal_code is `PF-09`', async () => {
    const formData = { number: 123456 };
    sendNumber.mockImplementation(() => Promise.resolve({
      error: true,
      status: 403,
      response: {
        internal_code: 'PF-09'
      }
    }));

    await onSubmit(formData);

    expect(router.push).toHaveBeenCalledWith('/validacion-biometrica/');
  });
});


