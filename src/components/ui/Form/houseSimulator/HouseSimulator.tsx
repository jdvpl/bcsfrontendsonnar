import { MenuItem } from '@mui/material';
import React,{ ClipboardEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSessionStorage } from '../../../../hooks/useSessionStorage';
import { SimulationData } from '../../../../interfaces';
import { days, months } from '../../../../lib/dates';
import { yearsAvailable } from '../../../../lib/simulator';
import { SesionStorageKeys } from '../../../../session';
import { convertToColombianPesos } from '../../../../utils';
import Alert from '../../Alert';
import Button from '../../Button';
import Input from '../../inputs/index';
import SimulatorLoader from '../../Loaders/SimulatorLoader';
import ReactHookFormSelect from '../../Select/newSelect';
import useHouseSimulator from './useHouseSimulator';
import NewAutoComplete from '../../inputs/newAutoComplete';

function HouseSimulator() {
  const [percentageFinance, setPercentageFinance] = useState<number>(0.7);
  const [insuranceCheck] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setDataFormQuota] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    {}
  );
  const [, setDataFormResponse] = useSessionStorage(
    SesionStorageKeys.dataFormSimulationResponse.key,
    {}
  );

  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<SimulationData>({ mode: 'onChange' });

  const typeHouse = watch('typeHouse', 'novis');
  const houseValue = watch('houseValue', 0);
  const financeValue = watch('financeValue', 0);
  const termFinance = watch('termFinance', 0);
  const day = watch('day', '');
  const month = watch('month', '');
  const year = watch('year', '');

  const calculatePercentageFinance = () => {
    if (houseValue > 0 && financeValue > 999999) {
      const calculatePercentage = financeValue / houseValue;
      setPercentageFinance(calculatePercentage);
    }
  };

  const automationFinanceValue = (value: number) => {
    if (value > 0) {
      setValue('financeValue', Math.round(value * 0.7));
    } else {
      setValue('financeValue', 0);
    }
  };

  const { onSubmit } = useHouseSimulator({
    typeHouse,
    houseValue,
    financeValue,
    termFinance,
    calculatePercentageFinance,
    day,
    month,
    year,
    clearErrors,
    setError,
    setIsLoading,
    percentageFinance,
    insuranceCheck,
    setDataFormResponse,
    setDataFormQuota,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="houseSimulatorForTest">
      {isLoading ? (
        <SimulatorLoader />
      ) : (
        <div className="mx-auto ">
          <Alert message="Recuerde que la financiación del crédito hipotecario es hasta el 70% del valor comercial de la vivienda." className='mt-4'/>
          <div className="w-full mb-8">
            <ReactHookFormSelect
              onChange={(e: any) => setValue('typeHouse', e.target.value)}
              placeholder="Tipo de vivienda"
              label="Tipo de vivienda"
              defaultValue="novis"
              control={control}
              left="right4"
              valueLength=""
              name="typeHouse"
              className=""
              margin="normal"
              rules={{ required: true }}
            >
              <MenuItem value="novis">No VIS</MenuItem>
              <MenuItem value="vis">VIS</MenuItem>
            </ReactHookFormSelect>

            <Controller
              render={({ field }) => (
                <Input
                  containerClassName="mt-4"
                  type="text"
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  error={!!errors.typeHouse}
                  helperText={errors.typeHouse?.message}
                  value={convertToColombianPesos(field.value)}
                  tabIndex={0}
                  id="houseValue"
                  inputMode="text"
                  data-testid="rentValueTest"
                  required
                  label="Valor de Vivienda"
                  onChange={(e: any) => {
                    automationFinanceValue(e.target.value.replace(/[^0-9]/g, ''));
                    field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                />
              )}
              name="houseValue"
              control={control}
            />
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
            <div className="flex gap-3 my-4">
              <Controller
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Input
                    disabled={!(houseValue > 0) || !!errors?.houseValue}
                    type="text"
                    error={!!errors.financeValueE}
                    helperText={errors.financeValueE?.message}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    value={convertToColombianPesos(field.value)}
                    tabIndex={0}
                    id="valueFinance"
                    inputMode="text"
                    data-testid="valueFinanceTest"
                    required
                    label="Valor a financiar"
                    onChange={(e: any) => {
                      field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                    }}
                  />
                )}
                name="financeValue"
                control={control}
              />
              <div className="rounded-md w-[78px] border-[0.1px] text-[14px] h-[48px] bg-complementario-80 border-complementario-20/50 flex justify-center items-center text-complementario-20">
                {Math.floor(percentageFinance * 100) > 100
                  ? `>100`
                  : Math.floor(percentageFinance * 100)}
                %
              </div>
            </div>
            
            <ReactHookFormSelect
              onChange={(e: any) => setValue('termFinance', e.target.value)}
              placeholder="Plazo"
              label="Plazo"
              error={!!errors.termFinance}
              helperText={errors?.termFinance?.message}
              defaultValue=""
              control={control}
              left="right4"
              valueLength=""
              name="termFinance"
              data-testid="termFinance"
              className="mt-4"
              margin="normal"
              rules={{ required: true }}
            >
              {yearsAvailable.map((y, i) => (
                <MenuItem value={y} key={i}>
                  {y} años
                </MenuItem>
              ))}
            </ReactHookFormSelect>

            <span className="text-[10px] col-span-6 text-complementario-100">
              Fecha de nacimiento:
            </span>
            <div className="grid grid-cols-6 mb-4 mt-1 gap-x-4">
            <ReactHookFormSelect
              className="col-span-2"
              onChange={(e: any) => setValue('day', e.target.value)}
              placeholder="Dia"
              label="Dia"
              defaultValue=""
              control={control}
              left="right4"
              valueLength=""
              name="day"
              margin="normal"
              rules={{ required: true }}
              spacing="mr-[6px]"
            >
              {days?.map((element, i) => (
                <MenuItem value={element?.number} key={i}>
                  {element?.day}
                </MenuItem>
              ))}
            </ReactHookFormSelect>

            <ReactHookFormSelect
              onChange={(e: any) => setValue('month', e.target.value)}
              placeholder="Mes"
              label="Mes"
              defaultValue=""
              control={control}
              left="right4"
              name="month"
              className="col-span-2"
              margin="normal"
              rules={{ required: true }}
              spacing="mr-[6px]"
            >
              {months.map((element, i) => (
                <MenuItem value={element.number} key={i}>
                  {element.month}
                </MenuItem>
              ))}
            </ReactHookFormSelect>

            <Controller
              name="year"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  containerClassName="col-span-2"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e?.target?.value?.replace(/[^0-9]+/g, ''));
                  }}
                  error={!!errors.day}
                  helperText={errors?.day?.message}
                  value={field.value}
                  tabIndex={0}
                  id="year"
                  inputMode="numeric"
                  data-testid="yearDateOfBithTest"
                  maxLength={4}
                  label="Año"
                />
              )}
            />
            </div>
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
              className="w-100 mt-0 col-span-6"
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
            type="submit"
            className=""
            data-testid="btnOpenQuotaSimulation"
            disabled={!(isValid && Object.entries(errors).length === 0)}
          >
            <span className="text-[16px]">Simular</span>
          </Button>
          </div>

        </div>
      )}
    </form>
  );
}

export default HouseSimulator;
