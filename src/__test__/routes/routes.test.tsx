import { routes } from '../../routes';

describe('Routes', () => {
  it('should have a home route', () => {
    expect(routes).toHaveProperty('home', '/');
  });

  it('should have a startProccess route', () => {
    expect(routes).toHaveProperty('startProccess', '/inicio-solicitud');
  });

  it('should have a ratings route', () => {
    expect(routes).toHaveProperty('ratings', '/calificacion-solicitud');
  });

  it('should have a otp route', () => {
    expect(routes).toHaveProperty('otp', '/validacion-otp');
  });

  it('should have a validacionIdentidad route', () => {
    expect(routes).toHaveProperty('validacionIdentidad', '/validacion-identidad');
  });

  it('should have a validacionBiometrica route', () => {
    expect(routes).toHaveProperty('validacionBiometrica', '/validacion-biometrica');
  });

  it('should have a validacionErrorValidacionIdentidad route', () => {
    expect(routes).toHaveProperty('validacionErrorValidacionIdentidad', '/validacion/error-validacionIdentidad');
  });

  it('should have a validacionErrorPreguntas route', () => {
    expect(routes).toHaveProperty('validacionErrorPreguntas', 'validacion/error-validacion-identidad-preguntas');
  });

  it('should have a validacionErrorIntentos route', () => {
    expect(routes).toHaveProperty('validacionErrorIntentos', 'validacion/error-numero-intentos');
  });

  it('should have a validacionErrorBloqueo route', () => {
    expect(routes).toHaveProperty('validacionErrorBloqueo', 'validacion/error-bloqueo');
  });

  it('should have a errorValidacion route', () => {
    expect(routes).toHaveProperty('errorValidacion', '/validacion/error-validacion/');
  });

  it('should have a validacionErrorDiario route', () => {
    expect(routes).toHaveProperty('validacionErrorDiario', '/validacion/error-validacionDiario/');
  });

  it('should have a validacionBlock route', () => {
    expect(routes).toHaveProperty('validacionBlock', '/validacion/error-validacionBlock/');
  });

  it('should have a inactivityScreen route', () => {
    expect(routes).toHaveProperty('inactivityScreen', '/inactividad');
  });

  it('should have a simulador route', () => {
    expect(routes).toHaveProperty('simulador', '/simulador');
  });

  it('should have a simuladorResumen route', () => {
    expect(routes).toHaveProperty('simuladorResumen', '/simulador/resumen');
  })
  it('should have a onboarding route', () => {
    expect(routes).toHaveProperty('onboarding', '/bienvenida');
  });

  it('should have a authentication route', () => {
    expect(routes).toHaveProperty('authentication', '/autenticacion');
  });

  it('should have a personalData route', () => {
    expect(routes).toHaveProperty('personalData', '/datos-personales');
  });

  it('should have a sarlaft route', () => {
    expect(routes).toHaveProperty('sarlaft', '/preguntas-sarlaft');
  });

  it('should have a finalcialData route', () => {
    expect(routes).toHaveProperty('finalcialData', '/datos-financieros');
  });

  it('should have a creditData route', () => {
    expect(routes).toHaveProperty('creditData', '/datos-credito');
  });

  it('should have a summaryApprovalPage route', () => {
    expect(routes).toHaveProperty('summaryApprovalPage', '/');
  });

  it('should have a approvalDataPage route', () => {
    expect(routes).toHaveProperty('approvalDataPage', '/confirmacion-solicitud');
  });

  it('should have a ResumenSolicitud route', () => {
    expect(routes).toHaveProperty('ResumenSolicitud', '/resumen-solicitud');
  });
})