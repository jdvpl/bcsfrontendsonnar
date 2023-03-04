import { renderHook } from '@testing-library/react-hooks';
import useValidations from '../../hooks/useValidationsCreditData';
import { routes } from '../../routes';
import { createMockRouter } from '../utils/createMockRouter';
import { iCreditData } from '../../interfaces/iCreditData';

const amortizationType = 'Pesos';
jest.useFakeTimers();
jest.mock('../../services', () => ({
  riskBoxes: jest.fn().mockResolvedValue({
    response: {
      result: {
        customerStatus: {
          finalOffer: {
            isViable: false,
            offer: {
              financeValue: 57763534,
              monthlyInstallment: 1399999.99,
              rate: '1.32% MV - 17.05% EA',
              termFinance: 5,
              lifeInsurance: '',
              fireInsurance: '',
            },
          },
          status: 200,
        },
      },
    },
    error: false,
  }),
}));

it('redirect to error validation when does not viable ', async () => {
  const setCurrentRouting = jest.fn();
  const customRouter = createMockRouter({});
  const mortgageValuesData: iCreditData = {
    typeHouse: 'vis',
    houseStatus: 'new',
    houseValue: '2000000000',
    financeValue: '140000000',
    termFinance: '9',
    insuranceCheck: 'true',
    choseOffice: '',
    office: '',
    stratum: '3',
    amortizationType: 'Pesos',
  };
  const { result } = renderHook(() =>
    useValidations(
      'novis',
      200,
      140,
      0,
      jest.fn(),
      jest.fn(),
      jest.fn(),
      jest.fn(),
      jest.fn(),
      '',
      '',
      null,
      null,
      null,
      customRouter,
      null,
      setCurrentRouting,
      mortgageValuesData,
      amortizationType
    )
  );
  await result?.current?.onSubmit();
  expect(customRouter.push).toHaveBeenCalledWith(routes.errorValidacion);
});
