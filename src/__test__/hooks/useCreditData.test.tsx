import { act, renderHook } from '@testing-library/react-hooks';
import useValidations from '../../hooks/useValidationsCreditData';
import { maxHouseValueNoVis } from '../../lib/simulator';
import { routes } from '../../routes';
import { createMockRouter } from '../utils/createMockRouter';

import { riskBoxes } from '../../services';
import { iCreditData } from '../../interfaces/iCreditData';

const mortgageValues = {}
const amortizationType = "Pesos";
const router = createMockRouter({});
jest.useFakeTimers();
jest.mock('../../services');
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
describe('useValidations is successfully', () => {
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
  const router = jest.fn();

  const houseType = 'vis';
  const mkFn = jest.fn()
  const setDataForm = jest.fn()
  const errors: any = [];
  beforeEach(async () => {
    clearErrors = jest.fn();
    setPercentageFinance = jest.fn();
    setError = jest.fn();
    setValue = jest.fn();
    jest.resetAllMocks();

    const component = renderHook(() =>
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
  });
  it('clearErrors should call 7 time', async () => {
    expect(clearErrors.mock.calls.length).toBe(7);
  });
  it('setError should call 2 time', async () => {
    expect(setError.mock.calls.length).toBe(2);
  });
  it('setPercentageFinance should call 1 time', async () => {
    expect(setPercentageFinance.mock.calls.length).toBe(1);
  });
});

describe('useValidations is successfully', () => {
  const houseValue: any = maxHouseValueNoVis * 2;
  const financeValue: any = maxHouseValueNoVis * 3;
  const termFinance: any = 10;
  const typeHouse: any = 'vis';
  let clearErrors: any;
  let setError: any;
  let setPercentageFinance: any;
  let setValue: any;
  const houseType = 'vis';


  beforeEach(async () => {
    clearErrors = jest.fn();
    setPercentageFinance = jest.fn();
    setError = jest.fn();
    setValue = jest.fn();
    jest.resetAllMocks();

    const component = renderHook(() =>
      useValidations(
        typeHouse,
        houseValue,
        financeValue,
        termFinance,
        clearErrors,
        setError,
        setPercentageFinance,
        setValue, jest.fn(), "", "", "", "", "", jest.fn(), "", jest.fn(), {}, amortizationType)
    );
  });
  it('setError should call 2 time', async () => {
    expect(setError.mock.calls.length).toBe(2);
  });

});

describe('', () => {

  it('should calculate percentage finance correctly', () => {
    const { result } = renderHook(() => useValidations('novis', 200, 140, 0, jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn(), "", "", null, null, null, jest.fn(), null, jest.fn(), {}, amortizationType));
    act(() => {
      result.current.calculatePercentageFinance();
    });
  });
  it('should called  routes finalcialData and creditData with false', async () => {
    const setCurrentRouting = jest.fn();
    const { result } = renderHook(() => useValidations('novis', 200, 140, 0, jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn(), "", "", null, null, null, router, null, setCurrentRouting, {}, amortizationType));
    await result?.current?.onSubmit()
    expect(setCurrentRouting).toHaveBeenCalledWith(routes.finalcialData, false)
    expect(setCurrentRouting).toHaveBeenCalledWith(routes.creditData, false)
  });
  it('Should render the mortgage value when user gets back', async () => {
    const setCurrentRouting = jest.fn();
    const mortgageValuesData: iCreditData = {
      typeHouse: 'vis',
      houseStatus: 'new',
      houseValue: '2000000000',
      financeValue: '140000000',
      termFinance: '9',
      insuranceCheck: 'true',
      choseOffice: "",
      office: '',
      stratum: '3',
      amortizationType: 'Pesos'
    }
    const { result } = renderHook(() => useValidations('novis', 200, 140, 0, jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn(), "", "", null, null, null, router, null, setCurrentRouting, mortgageValuesData, amortizationType));

    await result?.current?.onSubmit()
    expect(setCurrentRouting).toHaveBeenCalledWith(routes.finalcialData, false)
    expect(setCurrentRouting).toHaveBeenCalledWith(routes.creditData, false)
  });

})





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
