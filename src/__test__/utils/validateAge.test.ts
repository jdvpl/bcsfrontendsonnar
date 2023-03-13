import { cardTextStyles } from "../../lib/rating";
import { validateAge } from "../../utils";

describe('validateAge', () => {
  it('should call setError with the correct error message when the age is greater than 71', () => {
    const setError = jest.fn();
    validateAge('14', '02', '1940', setError);

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

  it('should not call setError when the age is between 19 and 71', () => {
    const setError = jest.fn();
    validateAge('14', '02', '1990', setError);

    expect(setError).not.toHaveBeenCalled();
  });

  it('should call setError with the correct error message when the date is invalid', () => {
    const setError = jest.fn();
    validateAge('31', '02', '2000', setError);

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

  it('should not call setError when the date is valid', () => {
    const setError = jest.fn();
    validateAge('14', '02', '2000', setError);

    expect(setError).not.toHaveBeenCalled();
  });
  it('should call rating styles',()=>{
    expect(cardTextStyles).toBe('text-[20px] pl-[23px] font-semibold font-poppinsSemiBold')
  })
});
