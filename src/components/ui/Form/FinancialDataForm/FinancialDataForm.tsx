import { MenuItem } from '@mui/material';
import React, {
  ClipboardEvent,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useSessionStorage } from '../../../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../../../session';
import Button from '../../Button';
import Input from '../../inputs';
import ReactHookFormSelect from '../../Select/newSelect';
import { iFinancialData } from '../../../../interfaces/iFinancialData';
import { convertToColombianPesos } from '../../../../utils';
import Alert from '../../Alert';
import useValidationFinancialDataForm from './useValidationFinancialDataForm';
import { routes } from '../../../../routes';
import useProtectedRoutes from '../../../../hooks/useProtectedRoutes';

function FinancialDataForm() {
  const router = useRouter();
  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<iFinancialData>({ mode: 'onChange' });

  const { setCurrentRouting } = useProtectedRoutes();

  const occupation = watch('occupation');
  const enterprise = watch('enterprise');
  const contractType = watch('contractType');
  const employeeYear = watch('employeeYear');
  const employeeMonth = watch('employeeMonth');
  const monthlySalary = watch('monthlySalary');
  const monthlyExpenses = watch('monthlyExpenses');
  const realStateValue = watch('realStateValue');
  const debtValue = watch('debtValue');

  const [, setFinancialDataForm] = useSessionStorage(
    SesionStorageKeys.financialDataForm.key,
    {}
  );
  const onSubmit = async (data: iFinancialData) => {
    if (data.occupation !== "14") {
      data.employeeMonth = null;
      data.employeeYear = null;
      data.enterprise = null;
      data.contractType = null;
    }
    setFinancialDataForm(data);
    if (data.contractType === "06") {
      router.push(routes.errorCreditBankApplication)
    } else {
      setCurrentRouting(routes.creditData);
      router.push(routes.creditData)
    }
  }

  useValidationFinancialDataForm(occupation, enterprise, contractType, employeeYear, employeeMonth, monthlySalary, monthlyExpenses, realStateValue, debtValue, clearErrors, setError);

  return (
    <div data-testid="FormQuotaTest" className="w-[343px] md:mt-[30px] md:w-[517px] xl:w-[656px] mx-auto">
      <Alert message='Los aportes a salud y pensión son un criterio obligatorio para la preaprobación del crédito.' />
      <div className="w-full mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="w-full mt-8">
            <ReactHookFormSelect
              onChange={(e: any) => {
                setValue('occupation', e.target.value);
              }}
              placeholder="Ocupación"
              label="Ocupación"
              error={!!errors.occupation}
              defaultValue=""
              control={control}
              left="right4"
              valueLength=""
              name="occupation"
              className="w-100"
              margin="normal"
              rules={{ required: true }}
            >
              <MenuItem value="14">Empleado</MenuItem>
              <MenuItem value="05">Pensionado o jubilado</MenuItem>
            </ReactHookFormSelect>
          </div>
          {
            occupation === '14' ? (
              <>
                <div className="flex flex-col mt-3">
                  <Controller
                    rules={{ required: occupation === '14' }}
                    render={({ field }) => (
                      <Input
                        helperText={errors.enterprise?.message}
                        type="text"
                        error={!!errors.enterprise}
                        onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                          e.preventDefault();
                        }}
                        value={field.value || undefined}
                        tabIndex={0}
                        id="enterprise"
                        inputMode="text"
                        label="Empresa"
                        dataTestId='enterpriseTest'
                        placeholder='Empresa'
                        onChange={(e: any) => setValue('enterprise', e.target.value)}
                      />
                    )}
                    name="enterprise"
                    control={control}
                  />
                </div>
                <div className="flex mt-3">
                  <ReactHookFormSelect
                    onChange={(e: any) => {
                      setValue('contractType', e.target.value);
                    }}
                    placeholder="Tipo de contrato"
                    label="Tipo de contrato"
                    error={!!errors.contractType}
                    defaultValue=""
                    control={control}
                    left="right4"
                    data-testid="contractTypeTest"
                    role="contractTypeRole"
                    valueLength=""
                    name="contractType"
                    className="w-100"
                    margin="normal"
                    rules={{ required: occupation === '14' }}
                  >
                    <MenuItem value="01">Término indefinido</MenuItem>
                    <MenuItem value="02">Término fijo</MenuItem>
                    <MenuItem value="03">Prestación de servicios</MenuItem>
                    <MenuItem value="04">Temporal-En misión</MenuItem>
                    <MenuItem value="05">Carrera administrativa</MenuItem>
                    <MenuItem value="06">Libre nombramiento y remoción</MenuItem>
                    <MenuItem value="02">Provisional</MenuItem>
                  </ReactHookFormSelect>
                </div>
                <span className="text-[10px] col-span-6 text-complementario-100">
                  Tiempo laborando en esta empresa
                </span>
                <div className='grid gap-2 grid-cols-2 mt-2'>
                  <div >
                    <Controller
                      rules={{ required: occupation === '14', maxLength: 2 }}
                      render={({ field }) => (
                        <Input
                          type="text"
                          helperText={errors.employeeYearE?.message}
                          error={!!errors.employeeYearE}
                          onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                            e.preventDefault();
                          }}
                          value={field.value || ''}
                          tabIndex={0}
                          id="employeeYear"
                          inputMode="numeric"
                          dataTestId='employeeYearTest'
                          required
                          label="Años"
                          onChange={(e: any) => {
                            field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                          }}
                        />
                      )}
                      name="employeeYear"
                      control={control}
                    />
                  </div>
                  <div>
                    <Controller
                      rules={{ required: occupation === '14' }}
                      render={({ field }) => (
                        <Input
                          type="text"
                          helperText={errors.employeeMonthE?.message}
                          error={!!errors.employeeMonthE}
                          onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                            e.preventDefault();
                          }}
                          value={field.value || ''}
                          tabIndex={0}
                          id="employeeMonth"
                          dataTestId='employeeMonthTest'
                          inputMode="numeric"
                          required
                          label="Meses"
                          onChange={(e: any) => {
                            field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                          }}
                        />
                      )}
                      name="employeeMonth"
                      control={control}
                    />
                  </div>
                </div>
              </>
            ) : null
          }
          <div className="flex flex-col mt-3">
            <Controller
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  helperText={errors.monthlySalaryE?.message ? errors.monthlySalaryE?.message : 'Registre el ingreso principal de su actividad económica.'}
                  helperTextOption={!errors.monthlySalaryE?.message}
                  type="text"
                  error={!!errors.monthlySalaryE}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  value={convertToColombianPesos(field.value)}
                  tabIndex={0}
                  id="monthlySalary"
                  inputMode="text"
                  dataTestId='monthlySalaryTest'
                  placeholder="Total de ingresos mensuales"
                  label="Total de ingresos mensuales"
                  onChange={(e: any) => {
                    field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                />
              )}
              name="monthlySalary"
              control={control}
            />
          </div>
          <div className="flex flex-col mt-3">
            <Controller
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  helperText={errors.monthlyExpenses?.message}
                  type="text"
                  error={!!errors.monthlyExpenses}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  value={convertToColombianPesos(field.value)}
                  tabIndex={0}
                  id="monthlyExpenses"
                  inputMode="text"
                  dataTestId='monthlyExpensesTest'
                  label="Total de gastos mensuales"
                  placeholder='Total de gastos mensuales'
                  onChange={(e: any) => {
                    field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                />
              )}
              name="monthlyExpenses"
              control={control}
            />
          </div>
          <div className="flex flex-col mt-3">
            <Controller
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  helperText={errors.realStateValue?.message}
                  type="text"
                  error={!!errors.realStateValue}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  value={convertToColombianPesos(field.value)}
                  tabIndex={0}
                  id="realStateValue"
                  inputMode="text"
                  dataTestId='realStateValueTest'
                  label="Total de valor de sus bienes"
                  placeholder='Total de valor de sus bienes'
                  onChange={(e: any) => {
                    field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                />
              )}
              name="realStateValue"
              control={control}
            />
          </div>
          <div className="flex flex-col mt-3">
            <Controller
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  helperText={errors.debtValue?.message}
                  type="text"
                  error={!!errors.debtValue}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  value={convertToColombianPesos(field.value)}
                  tabIndex={0}
                  id="debtValue"
                  dataTestId='debtValueTest'
                  inputMode="text"
                  label="Total de valor de sus deudas"
                  placeholder='Total de valor de sus deudas'
                  onChange={(e: any) => {
                    field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                />
              )}
              name="debtValue"
              control={control}
            />
          </div>
          <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-10">
            <Button
              isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px]"
              type="submit"
              name="openQuotaSimulation"
              className="mb-10"
              data-testid="btnFinancialDataTest"
              tabIndex={0}
              disabled={!(isValid && Object.entries(errors).length === 0)}
              id="btn-next"
            >
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FinancialDataForm;
