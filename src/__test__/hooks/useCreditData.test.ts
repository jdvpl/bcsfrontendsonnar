import { act, renderHook } from '@testing-library/react-hooks';
import useValidations from '../../hooks/useValidationsCreditData';
import { riskBoxes } from '../../services';

jest.mock('../../services');
const mortgageValues = {}
const amortizationType = "Pesos";
(riskBoxes as jest.Mock).mockReturnValueOnce({
  response: {
    status: 403,
    result: {
      data: 'ALLOWED',
    },
    json: () => {
      return { internal_code: 'IV-05' };
    },
  },
  error: false,
});

describe('isValid Method test', () => {
  const houseValue: any = 10000000;
  const financeValue: any = 1000000;
  const termFinance: any = 1000000;
  const typeHouse: any = 'vis';
  const houseStatus: any = 'vis';
  const insuranceCheck: boolean = true;
  const choseOffice = jest.fn();
  const office = null;
  let clearErrors: any;
  let setError: any;
  let setPercentageFinance: any;
  let setValue: any;
  const stratum: any = 0;
  const router = {
    push: jest.fn(),
  };
  const houseType = 'vis';
  const mkFn = jest.fn();
  const setDataForm = jest.fn();
  const errors: any = [];
  beforeEach(async () => {
    clearErrors = jest.fn();
    setPercentageFinance = jest.fn();
    setError = jest.fn();
    setValue = jest.fn();
    jest.resetAllMocks();
  });
  it('should return true', () => {
    const { result } = renderHook(() =>
      useValidations(
        typeHouse,
        houseValue,
        financeValue,
        termFinance,
        clearErrors,
        setError,
        setPercentageFinance,
        setValue,
        setDataForm,
        houseStatus,
        insuranceCheck,
        choseOffice,
        office,
        stratum,
        router,
        errors,
        mkFn, mortgageValues, amortizationType
      )
    );
    act(() => {
      result.current.isValid();
    });

    act(() => {
      result.current.automationFinanceValue(100000);
    });

    act(() => {
      result.current.automationFinanceValue(0);
    });

    act(async () => {
      await result.current.onSubmit();
    });
  });
});
