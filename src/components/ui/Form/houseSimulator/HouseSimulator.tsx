import { MenuItem } from '@mui/material';
import React, { useState, ClipboardEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import ReactHookFormSelect from '../../Select/newSelect';
import Input from '../../inputs/index';
import { convertToColombianPesos, parserPercentageDecimal } from '../../../../utils';
import { days, months } from '../../../../lib/dates';
import Button from '../../Button';
import { iFormDataSimulation, SimulationData } from '../../../../interfaces';
import { yearsAvailable } from '../../../../lib/simulator';
import useValidations from './useValidations';
import { sendSimulationData } from '../../../../services';
import { useSessionStorage } from '../../../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../../../session';
import { routes } from '../../../../routes';
import Alert from '../../Alert';
import TagManager from 'react-gtm-module';

function HouseSimulator() {
  const router = useRouter();
  const [percentageFinance, setPercentageFinance] = useState<number>(0.7);
  const [insuranceCheck, setInsuranceCheck] = useState<boolean>(true);
  const [dataFormQuota, setDataFormQuota] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    {}
  );
  const [dataFormResponse, setDataFormResponse] = useSessionStorage(
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

  useValidations(
    typeHouse,
    houseValue,
    financeValue,
    termFinance,
    calculatePercentageFinance,
    day,
    month,
    year,
    clearErrors,
    setError
  );

  const onSubmit = async (formData: SimulationData) => {
    TagManager.dataLayer({
      dataLayer: {
        event:'go_simulator',
        category: 'action_funnel',
        action: 'go_simulator',
        label: 'go_simulator',
      },
    })
    const body: iFormDataSimulation = {
      typeHouse: formData?.typeHouse,
      houseValue: Math.floor(formData.houseValue),
      financeValue: formData.financeValue,
      termFinance: formData?.termFinance,
      percentageFinance,
      insuranceCheck,
      dateOfBirth: `${year}-${month}-${day}`,
      simulationType: 'house',
      monthlySalary: 0,
      amountQuota: 0,
      percentageQuota: 0.3,
    };
    const response = await sendSimulationData(body);
    if (!response.error) {
      setDataFormResponse(response?.response?.data);
      setDataFormQuota(body);
      router.push(routes.simuladorResumen);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="houseSimulatorForTest">
      <div className="w-[343px] md:w-[517px] xl:w-[656px] m-auto flex items-center flex-col">
        <Alert message="Recuerde que la financiación del crédito hipotecario es hasta el 70% del valor comercial de la vivienda y la cuota inicial equivalente al 30% restante debe solventarla con recursos propios." />
        <div className="grid grid-cols-6 gap-y-4 gap-x-2 w-full mb-8">
          <ReactHookFormSelect
            onChange={(e: any) => setValue('typeHouse', e.target.value)}
            placeholder="Tipo de vivienda"
            label="Tipo de vivienda"
            defaultValue="novis"
            control={control}
            left="right4"
            valueLength=""
            name="typeHouse"
            className="col-span-6"
            margin="normal"
            rules={{ required: true }}
          >
            <MenuItem value="novis">No VIS</MenuItem>
            <MenuItem value="vis">VIS</MenuItem>
          </ReactHookFormSelect>

          <Controller
            render={({ field }) => (
              <Input
                containerClassName="col-span-6"
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

          <div className="col-span-6 flex gap-3">
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
            className="col-span-6"
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

        <Button
          type="submit"
          className="mb-10"
          data-testid="btnOpenQuotaSimulation"
          disabled={!(isValid && Object.entries(errors).length === 0)}
        >
          Simular
        </Button>
      </div>
    </form>
  );
}

export default HouseSimulator;
