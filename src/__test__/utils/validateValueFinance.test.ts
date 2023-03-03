import { validateFinanceValue } from "../../utils";

describe('validateFinanceValue function', () => {
  const setError = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not call setError function when financeValue is less than 70% of houseValue', () => {
    const financeValue = 50000000;
    const houseValue = 100000000;
    validateFinanceValue(financeValue, houseValue, setError);
    expect(setError).not.toBeCalled();
  });

  it('should call setError function with appropriate message when financeValue is more than 70% of houseValue', () => {
    const financeValue = 80000000;
    const houseValue = 100000000;
    validateFinanceValue(financeValue, houseValue, setError);
    expect(setError).toBeCalledWith('financeValueE', {
      type: 'error',
      message: 'El valor máximo a financiar no puede superar el 70% de la vivienda.',
    });
  });

  it('should call setError function with appropriate message when financeValue is less than 20 SMMLV', () => {
    const financeValue = 1000000;
    const houseValue = 50000000;
    validateFinanceValue(financeValue, houseValue, setError);
    expect(setError).toBeCalledWith('financeValueE', {
      type: 'error',
      message: 'El valor mínimo a financiar para vivienda VIS es de 20 SMMLV.',
    });
  });

  it('should not call setError function when financeValue is 0', () => {
    const financeValue = 0;
    const houseValue = 50000000;
    validateFinanceValue(financeValue, houseValue, setError);
    expect(setError).not.toBeCalled();
  });
});
