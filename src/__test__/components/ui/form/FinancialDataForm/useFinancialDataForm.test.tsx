import { renderHook } from '@testing-library/react-hooks';
import useValidationFinancialDataForm from '../../../../../components/ui/Form/FinancialDataForm/useValidationFinancialDataForm';

describe('useValidationFinancialDataForm', () => {
  test('calls the expected functions when the hook is called', () => {
    // Arrange
    const mockClearErrors = jest.fn();
    const mockSetError = jest.fn();
    // Act
    renderHook(() => useValidationFinancialDataForm(
      '05', null, null, null, null, 20000, 1000000, 30000000, 20000000,
      mockClearErrors,
      mockSetError,
    ));
    // Assert
    expect(mockClearErrors).toHaveBeenCalled();
    expect(mockSetError).toHaveBeenCalled();
  });
  test('calls the expected functions when the hook is called', () => {
    // Arrange
    const mockClearErrors = jest.fn();
    const mockSetError = jest.fn();
    // Act
    renderHook(() => useValidationFinancialDataForm(
      '14', 'Rappi', '01', '234', '20', 20000, 1000000, 30000000, 20000000,
      mockClearErrors,
      mockSetError,
    ));
    // Assert
    expect(mockClearErrors).toHaveBeenCalled();
    expect(mockSetError).toHaveBeenCalled();
  });
});
