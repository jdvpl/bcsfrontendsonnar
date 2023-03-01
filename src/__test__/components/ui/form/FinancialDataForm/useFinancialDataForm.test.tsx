import { renderHook } from '@testing-library/react-hooks';
import useValidationFinancialDataForm from '../../../../../hooks/useValidationFinancialDataForm';
import { iFinancialData } from '../../../../../interfaces/iFinancialData';

const financialDataForm: Partial<iFinancialData> = {

}
describe('useValidationFinancialDataForm', () => {
  test('calls the expected functions when the hook is called', () => {
    // Arrange
    const mockClearErrors = jest.fn();
    const mockSetError = jest.fn();
    const setValue = jest.fn();
    // Act
    renderHook(() => useValidationFinancialDataForm(
      'PensionerOrRetired', null, null, null, null, 20000, 1000000, 30000000, 20000000,
      mockClearErrors,
      mockSetError,
      setValue,
      financialDataForm
    ));
    // Assert
    expect(mockClearErrors).toHaveBeenCalled();
    expect(mockSetError).toHaveBeenCalled();
  });
  test('calls the expected functions when the hook is called', () => {
    // Arrange
    const mockClearErrors = jest.fn();
    const mockSetError = jest.fn();
    const setValue = jest.fn();

    // Act
    renderHook(() => useValidationFinancialDataForm(
      'Employee', 'Rappi', '01', '234', '20', 20000, 1000000, 30000000, 20000000,
      mockClearErrors,
      mockSetError,
      setValue,
      financialDataForm
    ));
    // Assert
    expect(mockClearErrors).toHaveBeenCalled();
    expect(mockSetError).toHaveBeenCalled();
  });
});
