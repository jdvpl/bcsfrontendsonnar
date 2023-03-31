import { MenuItem } from '@mui/material';
import React, { ClipboardEvent, FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { iFormDataSimulation, SimulationData } from '../../../interfaces';
import { yearsAvailable } from '../../../lib/simulator';
import { convertToColombianPesos, parserPercentageDecimal } from '../../../utils';
import Alert from '../Alert';
import Button from '../Button';
import Input from '../inputs';
import DateOfBirth from '../inputs/dateOfBirth';
import NewAutoComplete from '../inputs/newAutoComplete';
import SimulatorLoader from '../Loaders/SimulatorLoader';
import ReactHookFormSelect from '../Select/newSelect';
import useValidations from './useValidationsSalary';

interface FormProps {
  onSubmit: (data: iFormDataSimulation) => void;
  isLoading: boolean;
}

const FormQuota: FC<FormProps> = ({ onSubmit, isLoading }) => {
  const [percentage, setpercentage] = useState<number>(0.3);
  const [errorMessageAlert, seterrorMessageAlert] = useState<string>('');
  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    setValue,
    register,
    formState: { errors, isValid },
  } = useForm<SimulationData>({ mode: 'onChange' });

  const typeHouse = watch('typeHouse', 'novis');
  const monthlySalary = watch('monthlySalary', 0);
  const amountQuota = watch('amountQuota', 0);
  const termFinance = watch('termFinance', 0);

  const getPercentage = (value: any) => {
    if (+amountQuota > 0 && +monthlySalary > 0) {
      const percentage = +amountQuota / +monthlySalary;
      setpercentage(percentage);
    } else {
      setpercentage(typeHouse === 'novis' ? 0.3 : 0.4);
    }
  };
  useValidations(
    typeHouse,
    monthlySalary,
    amountQuota,
    termFinance,
    getPercentage,
    clearErrors,
    setError,
    setpercentage,
    seterrorMessageAlert,
    setValue
  );
  return (
    <>
      {isLoading ? (
        <SimulatorLoader />
      ) : (
        <div
          data-testid="FormQuotaTest"
          className="mx-auto "
        >
          <Alert message={errorMessageAlert} />
          <div className="w-full mt-3">
            <form onSubmit={handleSubmit(onSubmit)} data-testid="formTestId">
              <ReactHookFormSelect
                onChange={(e: any) => {
                  setValue('typeHouse', e.target.value);
                  setValue('amountQuota', monthlySalary * percentage);
                }}
                placeholder="Tipo de vivienda"
                label="Tipo de vivienda"
                error={!!errors.typeHouse}
                defaultValue="novis"
                control={control}
                left="right4"
                valueLength=""
                name="typeHouse"
                className="w-100"
                margin="normal"
                required
                data-testid="typeHouseTest"
              >
                <MenuItem value="novis">No VIS</MenuItem>
                <MenuItem value="vis" data-testid="typeSalaryVisTest">
                  VIS
                </MenuItem>
              </ReactHookFormSelect>
              
              <div className="grid mt-4 grid-col-1 md:grid-cols-2 gap-x-4 gap-y-4">
                <Controller
                  control={control}
                  name="city"
                  rules={{ required: true }}
                  defaultValue={undefined}
                  render={({ field: { onChange } }) => (
                    <NewAutoComplete
                      id="birthCity"
                      defaultValue={undefined}
                      placeholder="Ciudad de la vivienda"
                      label="Ciudad de la vivienda"
                      onChange={(e: any) => {
                        if (e?.id) {
                          return onChange({ item: e.name, option: e.id });
                        }
                        return onChange(undefined);
                      }}
                      zIndex={30}
                    />
                  )}
                />
                <ReactHookFormSelect
                onChange={(e: any) => setValue('stratum', e.target.value)}
                placeholder="Estrato de la vivienda"
                label="Estrato de la vivienda"
                defaultValue=""
                control={control}
                left="right4"
                valueLength=""
                name="stratum"
                className="w-full md:mt-0 "
                margin="normal"
                rules={{ required: true }}
              >
                {[1, 2, 3, 4, 5, 6]?.map((y:number) => (
                  <MenuItem value={y} key={y}>
                    {y}
                  </MenuItem>
                ))}
              </ReactHookFormSelect>
            </div>
              <div className="flex flex-col mt-4">
                <Controller
                  render={({ field }) => (
                    <Input
                      helperText={errors.monthlySalaryE?.message}
                      type="text"
                      error={!!errors.monthlySalaryE}
                      onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                        e.preventDefault();
                      }}
                      value={convertToColombianPesos(field.value)}
                      tabIndex={0}
                      id="monthlySalary"
                      inputMode="text"
                      data-testid="monthlySalaryTest"
                      required
                      label="Ingreso mensual"
                      onChange={(e: any) => {
                        setValue(
                          'amountQuota',
                          e.target.value.replace(/[^0-9]/g, '') * percentage
                        );
                        field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                      }}
                    />
                  )}
                  name="monthlySalary"
                  control={control}
                />
              </div>
              <div className="flex mt-4 gap-3">
                <Controller
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      helperText={errors.amountQuotaE?.message}
                      type="text"
                      error={!!errors.amountQuotaE}
                      onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                        e.preventDefault();
                      }}
                      value={convertToColombianPesos(Math.round(field.value))}
                      tabIndex={0}
                      id="amountQuota"
                      data-testid="amountQuotaTest"
                      inputMode="text"
                      required
                      disabled={!(monthlySalary > 0)}
                      label="Cuota mensual"
                      onChange={(e: any) => {
                        if (field.value > 9999999 && !!e.nativeEvent.data) {
                          return;
                        }
                        field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                      }}
                    />
                  )}
                  name="amountQuota"
                  control={control}
                />
                <div className="rounded-md w-[78px] border-[0.1px] text-[14px] h-[48px] bg-complementario-80 border-complementario-20/50 flex justify-center items-center text-complementario-20">
                  {percentage * 100 > 100
                    ? '>100%'
                    : `${parserPercentageDecimal(percentage * 100)}%`}
                </div>
              </div>

              <div className="mt-4">
                <ReactHookFormSelect
                  onChange={(e: any) => setValue('termFinance', e.target.value)}
                  placeholder="Plazo"
                  label="Plazo"
                  error={!!errors.termFinance}
                  defaultValue=""
                  left="right4"
                  valueLength=""
                  className="w-100"
                  margin="normal"
                  control={control}
                  name="termFinance"
                  rules={{ required: true }}
                >
                  {yearsAvailable.map((y, i) => (
                    <MenuItem value={y} key={i}>
                      {y} años
                    </MenuItem>
                  ))}
                </ReactHookFormSelect>
              </div>
              <div className="mt-4">
                <Controller
                  control={control}
                  name="dateOfBirth"
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <DateOfBirth
                      id="dateOfBirth"
                      defaultValues={undefined}
                      onChangeDate={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                />
              </div>
                      <div className="mt-4">

                      
              <ReactHookFormSelect
              onChange={(e: any) => {
                setValue('gender', e.target.value);
              }}
              placeholder="Género"
              label="Género"
              error={!!errors.gender}
              control={control}
              left="right4"
              dataTestId="genderTest"
              name="gender"
              margin="normal"
              spacing="mr-[-10px]"
              rules={{ required: true }}
            >
              <MenuItem value="F">Femenino</MenuItem>
              <MenuItem value="M">Masculino</MenuItem>
            </ReactHookFormSelect>
            </div>
              <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-10">
                <Button
                  isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px]"
                  type="submit"
                  name="openQuotaSimulation"
                  className="mb-10"
                  data-testid="btnOpenQuotaSimulation"
                  tabIndex={0}
                  disabled={!(isValid && Object.entries(errors).length === 0)}
                  id="btn-next"
                >
                  <span className="text-[16px]">Simular</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormQuota;
