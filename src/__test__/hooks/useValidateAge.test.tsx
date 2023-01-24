import { renderHook, act } from '@testing-library/react-hooks';
import useValidateAge from '../../hooks/useValidateAge';
import { calculateAge } from '../../utils';

jest.mock('../../utils', () => {
  return {
    calculateAge: jest.fn(),
  };
});

describe('useValidateAge', () => {
  let clearErrors: any;
  let setError: any;

  beforeEach(() => {
    clearErrors = jest.fn();
    setError = jest.fn();
  });

  test('should call clearErrors when useEffect is called', () => {
    renderHook(() => useValidateAge('1', '1', '2000', clearErrors, setError));
    expect(clearErrors).toHaveBeenCalledTimes(3);
    expect(clearErrors).toHaveBeenCalledWith('day');
    expect(clearErrors).toHaveBeenCalledWith('month');
    expect(clearErrors).toHaveBeenCalledWith('year');
  });
  test('should call setError if age is less than 19 or greater than 69', () => {
    (calculateAge as jest.Mock).mockReturnValueOnce(18);
    renderHook(() => useValidateAge('1', '1', '2000', clearErrors, setError));
    expect(setError).toHaveBeenCalledTimes(1);
    expect(setError).toHaveBeenCalledWith(
      'day',
      {
        type: 'error',
        message: 'Fecha inválida',
      },
      {
        shouldFocus: true,
      }
    );
    (calculateAge as jest.Mock).mockReturnValueOnce(70);
    renderHook(() => useValidateAge('1', '1', '2000', clearErrors, setError));
    expect(setError).toHaveBeenCalledTimes(2);
    expect(setError).toHaveBeenCalledWith(
      'day',
      {
        type: 'error',
        message: 'Fecha inválida',
      },
      {
        shouldFocus: true,
      }
    );

  });


});