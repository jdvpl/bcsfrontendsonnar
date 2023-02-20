import { routes } from '../../routes';
import { getQuestions } from '../../services';
import useAuthentication from '../../hooks/useAuthentication';

jest.mock('../../services', () => ({
  getQuestions: jest.fn()
}));

const fkMock = jest.fn();

describe('useAuthentication', () => {
  let setShowAnimation: jest.Mock;
  let setValidated: jest.Mock;
  let setDataQuestions: jest.Mock;
  let router: any;
  let dataUser: any;
  let onSubmit: any;

  beforeEach(() => {
    setShowAnimation = jest.fn();
    setValidated = jest.fn();
    setDataQuestions = jest.fn();
    router = { push: jest.fn() };
    dataUser = {
      document_type: 'CC',
      document_number: '12345678',
      policy_and_terms: true,
      commercial_terms: true
    };
    onSubmit = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, fkMock).onSubmit;
  });

  it('debería llamar a setShowAnimation con true', async () => {
    await onSubmit();
    expect(setShowAnimation).toHaveBeenCalledWith(true);
  });

  it('debería llamar a setValidated con true', async () => {
    await onSubmit();
    expect(setValidated).toHaveBeenCalledWith(true);
  });

  it('debería llamar a getQuestions con el cuerpo correcto', async () => {
    await onSubmit();
    expect(getQuestions).toHaveBeenCalledWith({
      document_type: 'CC',
      document_number: '12345678',
      dataTreatment: true,
      productRegulation: true,
      commercialPurposes: true
    });
  });

  it('debería llamar a setDataQuestions con la respuesta correcta', async () => {
    (getQuestions as jest.Mock).mockResolvedValue({
      response: {
        data: 'some data'
      }
    });
    await onSubmit();
    expect(setDataQuestions).toHaveBeenCalledWith('some data');
  });

  it('debería llamar a router.push con la ruta correcta', async () => {
    (getQuestions as jest.Mock).mockResolvedValue({
      response: {
        data: 'some data'
      }
    });
    await onSubmit();
    expect(router.push).toHaveBeenCalledWith(routes.validacionIdentidad);
  });
  it('should set showAnimation to true and validated to true', async () => {
    const { onSubmit } = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, fkMock);
    await onSubmit();
    expect(setShowAnimation).toHaveBeenCalledWith(true);
    expect(setValidated).toHaveBeenCalledWith(true);
  });
  it('should call getQuestions with the correct body', async () => {
    const { onSubmit } = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, fkMock);
    await onSubmit();
    expect(getQuestions).toHaveBeenCalledWith({
      document_type: 'CC',
      document_number: '12345678',
      dataTreatment: true,
      productRegulation: true,
      commercialPurposes: true,
    });
  });
  it('should navigate to validacionIdentidad if there is no error in the response', async () => {
    (getQuestions as jest.Mock).mockResolvedValueOnce({});
    const { onSubmit } = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, fkMock);
    await onSubmit();
    expect(router.push).toHaveBeenCalledWith(routes.validacionIdentidad);
  });
  it('should navigate to validacionErrorValidacionIdentidad if the response status is 403 and the internal code is RL-02, IV-02, IV-03, or IV-05', async () => {
    (getQuestions as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 403,
        data: {},
        json: jest.fn().mockResolvedValueOnce({ internal_code: 'RL-02' }),
      },
    });
    const { onSubmit } = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, fkMock);
    await onSubmit();
    (getQuestions as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 403,
        data: {},
        json: jest.fn().mockResolvedValueOnce({ internal_code: 'IV-02' }),
      },
    });
    await onSubmit();

    (getQuestions as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 403,
        data: {},
        json: jest.fn().mockResolvedValueOnce({ internal_code: 'IV-03' }),
      },
    });
    await onSubmit();

    (getQuestions as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 403,
        data: {},
        json: jest.fn().mockResolvedValueOnce({ internal_code: 'IV-05' }),
      },
    });
    await onSubmit();
  });
  it('should navigate to validacionErrorDiario if the response status is 403 and the internal code is IV-08', async () => {
    (getQuestions as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 403,
        data: {},
        json: jest.fn().mockResolvedValueOnce({ internal_code: 'IV-08' }),
      },
    });
    const { onSubmit } = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, fkMock);
    await onSubmit();
    expect(router.push).toHaveBeenCalledWith(routes.validacionIdentidad);
  });
  it('should navigate to validacionBlock if the response status is 403 and the internal code is IV-09', async () => {
    (getQuestions as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 403,
        data: {},
        json: jest.fn().mockResolvedValueOnce({ internal_code: 'IV-09' }),
      },
    });
    const { onSubmit } = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, fkMock);
    await onSubmit();
    expect(router.push).toHaveBeenCalledWith(routes.validacionIdentidad);
  });
});