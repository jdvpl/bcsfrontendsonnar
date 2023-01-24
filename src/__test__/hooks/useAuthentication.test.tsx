import { routes } from '../../routes';
import { getQuestions } from '../../services';
import useAuthentication from '../../hooks/useAuthentication';

jest.mock('../../services', () => ({
  getQuestions: jest.fn()
}));

describe('useAuthentication', () => {
  let setShowAnimation;
  let setValidated;
  let setDataQuestions;
  let router;
  let dataUser;
  let onSubmit;

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
    onSubmit = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router).onSubmit;
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
    getQuestions.mockResolvedValue({
      response: {
        data: 'some data'
      }
    });
    await onSubmit();
    expect(setDataQuestions).toHaveBeenCalledWith('some data');
  });

  it('debería llamar a router.push con la ruta correcta', async () => {
    getQuestions.mockResolvedValue({
      response: {
        data: 'some data'
      }
    });
    await onSubmit();
    expect(router.push).toHaveBeenCalledWith(routes.validacionIdentidad);
  });
});