import { handleClearErrors } from "../../utils";

describe('handleClearErrors', () => {
  test('debería llamar a clearErrors con los valores correctos', () => {
    // Crea una función mock para clearErrors
    const clearErrorsMock = jest.fn();

    // Llama a la función handleClearErrors con la función mock
    handleClearErrors(clearErrorsMock);

    // Comprueba que clearErrors se llama con los valores correctos
    expect(clearErrorsMock).toHaveBeenCalledTimes(7);
    expect(clearErrorsMock).toHaveBeenNthCalledWith(1, 'typeHouse');
    expect(clearErrorsMock).toHaveBeenNthCalledWith(2, 'houseValue');
    expect(clearErrorsMock).toHaveBeenNthCalledWith(3, 'financeValueE');
    expect(clearErrorsMock).toHaveBeenNthCalledWith(4, 'termFinance');
    expect(clearErrorsMock).toHaveBeenNthCalledWith(5, 'day');
    expect(clearErrorsMock).toHaveBeenNthCalledWith(6, 'month');
    expect(clearErrorsMock).toHaveBeenNthCalledWith(7, 'year');
  });
});
