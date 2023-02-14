import { validateTypeHouse } from "../../utils";

describe('validateTypeHouse', () => {
  test('debería llamar a setError con el mensaje correcto cuando el tipo de vivienda es VIS y el valor está fuera del rango', () => {
    // Crea una función mock para setError
    const setErrorMock = jest.fn();

    // Llama a la función validateTypeHouse con los valores correspondientes
    validateTypeHouse(49, 'vis', setErrorMock);

    // Comprueba que setError se llama con el mensaje de error correcto
    expect(setErrorMock).toHaveBeenCalledTimes(1);
    expect(setErrorMock).toHaveBeenCalledWith('typeHouse', {
      type: 'error',
      message: 'El valor de la vivienda VIS debe estar entre 50 y 150 SMMLV.',
    });
  });

  test('debería llamar a setError con el mensaje correcto cuando el tipo de vivienda es NOVIS y el valor es menor al valor mínimo', () => {
    // Crea una función mock para setError
    const setErrorMock = jest.fn();

    // Llama a la función validateTypeHouse con los valores correspondientes
    validateTypeHouse(14999999, 'novis', setErrorMock);

    // Comprueba que setError se llama con el mensaje de error correcto
    expect(setErrorMock).toHaveBeenCalledTimes(1);
    expect(setErrorMock).toHaveBeenCalledWith('typeHouse', {
      type: 'error',
      message: 'El valor mínimo de la vivienda debe ser de 150 SMMLV.',
    });
  });

  test('no debería llamar a setError cuando el tipo de vivienda es NOVIS y el valor está dentro del rango', () => {
    // Crea una función mock para setError
    const setErrorMock = jest.fn();

    // Llama a la función validateTypeHouse con los valores correspondientes
    validateTypeHouse(150000000, 'novis', setErrorMock);

    // Comprueba que setError no se llama
    expect(setErrorMock).not.toHaveBeenCalled();
  });
});
