import { MenuItem } from '@mui/material';
import React, { useState, ClipboardEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactHookFormSelect from '../../Select/newSelect';
import Input from '../../inputs/index';
import { convertToColombianPesos } from '../../../../utils';
import { days, months } from '../../../../lib/dates';
import { HelperText } from '../../inputs/HelperText';
import Button from '../../Button';
import { iFormDataSimulation, SimulationData } from '../../../../interfaces';
import { yearsAvailable } from '../../../../lib/simulator';
import useValidations from './useValidations';
import { sendSimulationData } from '../../../../services';
import { useRouter } from 'next/router';
import { useSessionStorage } from '../../../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../../../session';
import { routes } from '../../../../routes';
import Icons from '../../icons';
import Alert from '../../Alert';
import { parserPercentageDecimal } from '../../../../utils/index';

const HouseSimulator = () => {
  const router = useRouter();
  const [percentageFinance, setPercentageFinance] = useState<number>(0.7);
  const [insuranceCheck, setInsuranceCheck] = useState<boolean>(false);
  const [dataFormQuota, setDataFormQuota] = useSessionStorage(
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
  const valueFinance = watch('valueFinance', 0);
  const termFinance = watch('termFinance', 0);
  const day = watch('day', '');
  const month = watch('month', '');
  const year = watch('year', '');

  const calculatePercentageFinance = (field: any) => {
    if (houseValue > 0 && valueFinance > 999999 && valueFinance < houseValue * 0.7) {
      const calculatePercentage = valueFinance / houseValue;
      setPercentageFinance(calculatePercentage);
    } else {
      setPercentageFinance(0.7);
    }
  };

  const automationValueFinance = () => {
    if (houseValue > 0) {
      console.log(houseValue);
      setValue('valueFinance', houseValue * 0.7);
    }
  };

  useValidations(
    typeHouse,
    houseValue,
    valueFinance,
    termFinance,
    calculatePercentageFinance,
    day,
    month,
    year,
    clearErrors,
    setError
  );

  const onSubmit = async (formData: SimulationData) => {
    const body: iFormDataSimulation = {
      typeHouse: formData?.typeHouse,
      houseValue: Math.floor(formData.houseValue),
      valueFinance: formData.valueFinance,
      termFinance: formData?.termFinance,
      percentageFinance,
      insuranceCheck,
      dateOfBirth: `${day}-${month}-${year}`,
      simulationType: 'house',
      monthlySalary: 0,
      amountQuota: 0,
      percentageQuota: 0,
    };
    const response = await sendSimulationData(body);
    if (!response.error) {
      setDataFormResponse(response?.response?.data);
      setDataFormQuota(body);
      router.push(routes.simuladorResumen);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`w-[343px] md:w-[517px] xl:w-[656px] m-auto flex items-center flex-col`}
      >
        {errors.typeHouse ? (
          <Alert
            message={
              'Recuerde que la financiación del crédito hipotecario es hasta el 70% del valor comercial de la vivienda y la cuota inicial equivalente al 30% restante debe solventarla con recursos propios.'
            }
          />
        ) : null}
        <div className={`grid grid-cols-6 gap-y-4 gap-x-2 w-full mb-8`}>
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
          >
            <MenuItem value="novis">No VIS</MenuItem>
            <MenuItem value="vis">VIS</MenuItem>
          </ReactHookFormSelect>

          <Controller
            render={({ field }) => {
              return (
                <Input
                  containerClassName="col-span-6"
                  type="text"
                  error={!!errors.houseValue}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  value={convertToColombianPesos(field.value)}
                  tabIndex={0}
                  id="houseValue"
                  inputMode="text"
                  required
                  label="Valor de Vivienda"
                  onBlur={automationValueFinance}
                  onChange={(e: any) => {
                    field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                />
              );
            }}
            name="houseValue"
            control={control}
          />

          <div className="col-span-6 flex gap-3">
            <Controller
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input
                    disabled={!(houseValue > 0)}
                    type="text"
                    error={!!errors.valueFinance}
                    helperText={errors.valueFinance?.message}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    value={
                      field.value > houseValue * 0.7
                        ? convertToColombianPesos(houseValue * 0.7)
                        : convertToColombianPesos(field.value)
                    }
                    tabIndex={0}
                    id="valueFinance"
                    inputMode="text"
                    required
                    label="Valor a financiar"
                    onChange={(e: any) => {
                      field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                    }}
                  />
                );
              }}
              name="valueFinance"
              control={control}
            />
            <div className="rounded-md w-[78px] border-[0.1px] text-[14px] h-[48px] bg-complementario-80 border-complementario-20/50 flex justify-center items-center text-complementario-20">
              {parserPercentageDecimal(percentageFinance * 100)}%
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
            className="col-span-6"
            margin="normal"
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
            error={!!errors.day}
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
            error={!!errors.month}
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
            render={({ field }) => {
              return (
                <Input
                  containerClassName="col-span-2"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  error={!!errors.year}
                  value={field.value}
                  tabIndex={0}
                  id="year"
                  inputMode="numeric"
                  maxLength={4}
                  label="Año"
                />
              );
            }}
          />

          {!!errors?.day ? (
            <HelperText
              className="col-span-6"
              error={!!errors?.day}
              text={errors?.day?.message || ''}
            />
          ) : null}
        </div>

        <div className="flex items-center gap-3 mb-8 w-full">
          <input
            type="checkbox"
            tabIndex={0}
            id="insuranceCheck"
            className="inline-block p-0 m-0 h-[18px] w-[18.6px] min-w-[18.6px]"
            inputMode="numeric"
            required
            onChange={(e) => setInsuranceCheck(e.target.checked)}
          />

          <span className="text-[12px] text-primario-900">
            Deseo incluir en la simulación del crédito el valor de los seguros
            correspondientes.
          </span> 
        </div>

        <Button
          type="submit"
          className="mb-10"
          disabled={!(isValid && Object.entries(errors).length === 0)}
        >
          Simular
        </Button>
      </div>
    </form>
  );
};

export default HouseSimulator;