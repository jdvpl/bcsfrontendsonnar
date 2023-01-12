import React, { useEffect, ClipboardEvent, useState } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Button from '../../Button';
import ReactHookFormSelect from '../../Select/newSelect';
import { SimulationData } from '../../../../interfaces';
import Input from '../../inputs';
import { convertToColombianPesos } from '../../../../utils';
import { yearsAvailable } from '../../../../lib/simulator';
import useValidations from './useCreditData';
import { useSessionStorage } from '../../../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../../../session';
import { routes } from '../../../../routes';
import AutoCompleteCustom from '../../../../hooks/autocomplete';
import creditForm from '../../../../hooks/creditForm';

export function CreditDataForm() {
  const [insuranceCheck, setInsuranceCheck] = useState(true);
  const [percentageFinance, setPercentageFinance] = useState(0.7);
  const [dataForm] = useSessionStorage(SesionStorageKeys.dataFormSimulation.key, {});
  const [, setDataForm] = useSessionStorage(SesionStorageKeys.mortgageValues.key, {});
  const [offices, setOffices] = useState<any>([]);
  const router = useRouter();

  const {
    // handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    setValue,
    formState: { errors },
  } = useForm<SimulationData>({ mode: 'onChange' });

  const { changeOffice, choseOffice } = creditForm({ setOffices });

  const typeHouse = watch('typeHouse', 'new');
  const houseValue = watch('houseValue', dataForm?.houseValue || 0);
  const financeValue = watch('financeValue', dataForm?.financeValue || 0);
  const termFinance = watch('termFinance', dataForm?.termFinance || 0);
  const office = watch('office', dataForm?.office || 0);

  const renderPercentage = () => {
    if (Math.floor(percentageFinance * 100) > 100) {
      return `> 100`;
    }
    return Math.floor(percentageFinance * 100);
  };
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    setDataForm({
      typeHouse,
      houseValue,
      financeValue,
      termFinance,
      insuranceCheck,
      choseOffice,
      office,
    });
    router.push(routes.ResumenSolicitud);
  };

  const { automationFinanceValue } = useValidations(
    houseValue,
    financeValue,
    termFinance,
    clearErrors,
    setError,
    setPercentageFinance,
    setValue
  );

  useEffect(() => {
    setValue('financeValue', dataForm?.financeValue || 0);
    setValue('houseValue', dataForm?.houseValue || 0);
    setValue('termFinance', dataForm?.termFinance || 0);
    setValue('typeHouse', 'new');
  }, []);

  const isValid = () => {
    let formIsValid = !(Object.entries(errors).length === 0);
    const body = {
      typeHouse,
      houseValue,
      financeValue,
      termFinance,
      insuranceCheck,
      choseOffice,
      office,
    };

    var values = Object.values(body);
    for (var i = 0; i < values.length; i++) {
      if (
        (values[i] === null ||
          values[i] === undefined ||
          values[i] === '' ||
          values[i] === 0) &&
        choseOffice === true
      ) {
        formIsValid = true;
        break;
      } else if (
        (values[i] === null ||
          values[i] === undefined ||
          values[i] === '' ||
          values[i] === 0) &&
        i !== 6
      ) {
        formIsValid = true;
      }
    }
    return formIsValid;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Form When Person chose Hose */}
      <div className="flex flex-col items-center gap-y-[12px] w-full mb-[32px]">
        <div data-testid="InputTypeHouse" className="w-full">
          <ReactHookFormSelect
            onChange={(e: any) => setValue('typeHouse', e.target.value)}
            placeholder="Tipo de vivienda"
            label="Tipo de vivienda"
            defaultValue="usada"
            control={control}
            left="right4"
            valueLength=""
            name="typeHouse"
            className=""
            margin="normal"
            rules={{ required: true }}
          >
            <MenuItem value="new">Nueva</MenuItem>
            <MenuItem value="used">Usada</MenuItem>
          </ReactHookFormSelect>
        </div>
        <Controller
          render={({ field }) => (
            <Input
              onChange={(e: any) => {
                automationFinanceValue(e.target.value.replace(/[^0-9]/g, ''));
                field.onChange(e.target.value.replace(/[^0-9]/g, ''));
              }}
              error={!!errors.typeHouse}
              helperText={errors.typeHouse?.message}
              value={convertToColombianPesos(field.value)}
              defaultValue={convertToColombianPesos(1000)}
              tabIndex={0}
              id="houseValue"
              inputMode="text"
              data-testid="houseValueTest"
              required
              label="Valor aproximado de la vivienda"
              type="text"
              onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                e.preventDefault();
              }}
            />
          )}
          name="houseValue"
          control={control}
        />

        <div className="flex gap-3 w-full">
          <Controller
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                type="text"
                error={!!errors.financeValueE}
                helperText={errors.financeValueE?.message}
                value={convertToColombianPesos(field.value)}
                tabIndex={0}
                id="valueFinance"
                data-testid="valueFinanceTest"
                inputMode="text"
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
            {renderPercentage()}%
          </div>
        </div>

        <ReactHookFormSelect
          onChange={(e: any) => setValue('termFinance', e.target.value)}
          placeholder="Plazo"
          label="Plazo"
          defaultValue=""
          control={control}
          left="right4"
          valueLength=""
          name="termFinance"
          className="col-span-6"
          margin="normal"
          rules={{ required: true }}
        >
          {yearsAvailable?.map((y) => (
            <MenuItem value={y} key={y}>
              {y} años
            </MenuItem>
          ))}
        </ReactHookFormSelect>

        <Input
          type="text"
          classNameInput="text-complementario-60"
          labelColor="text-primario-20"
          defaultValue="Pesos"
          inputMode="text"
          disabled
          label="Tipo de amortización"
        />

        <div className="w-full pt-[20px]">
          <Typography
            variant="body1"
            className="w-full Montserrat text-primario-900 text-[16px] leading-[18px]"
          >
            Elija como continuar el proceso
          </Typography>
        </div>

        {/* Card Chose Housing */}
        <div className="cardShadow h-[71px] rounded-xl pt-[26px] mb-[6px] px-[24px] w-full">
          <div className="flex">
            <button
              className="flex cursor-pointer"
              onClick={() => changeOffice(true)}
              data-testid="Button-Yes"
            >
              <span className="font-semibold text-gris-100 mr-[10px]">Sucursal</span>
              <div className="w-[25px] h-[25px] border border-complementario-100 flex justify-center items-center rounded-full">
                {choseOffice ? (
                  <div className="w-[10px] h-[10px] bg-complementario-100 rounded-full">
                    {' '}
                  </div>
                ) : null}
              </div>
            </button>
            <button
              data-testid="Button-No"
              className="flex md:ml-[117px] xs:ml-[35px] ml-[35px] cursor-pointer"
              onClick={() => changeOffice(false)}
            >
              <span className="font-semibold text-gris-100">Asesor</span>
              <div className="ml-[15px] w-[25px] h-[25px] border border-complementario-100 flex justify-center items-center rounded-full">
                {!choseOffice ? (
                  <div className="w-[10px] h-[10px] bg-complementario-100 rounded-full">
                    {' '}
                  </div>
                ) : null}
              </div>
            </button>
          </div>
        </div>
        {choseOffice ? (
          <div className="w-full" data-testid="InputOffices">
            <Controller
              control={control}
              name="office"
              defaultValue={undefined}
              render={({ field: { onChange } }) => (
                <AutoCompleteCustom
                  id="currentCity"
                  defaultValue={undefined}
                  placeholder="Oficina de preferencia"
                  label="Sucursal"
                  arrayOptions={offices}
                  onChange={(e: any) => {
                    if (e?.idOffice) {
                      return onChange(e?.idOffice);
                    }
                    return onChange(undefined);
                  }}
                  zIndex={30}
                />
              )}
            />
          </div>
        ) : null}
      </div>

      <button
        className="flex items-start gap-3 w-full cursor-pointer"
        onClick={() => setInsuranceCheck(!insuranceCheck)}
      >
        <input
          type="checkbox"
          tabIndex={0}
          checked={insuranceCheck}
          id="insuranceCheck"
          className="inline-block p-0 m-0 h-[18px] w-[18.6px] min-w-[18.6px]"
          inputMode="numeric"
          onChange={(e) => setInsuranceCheck(e.target.checked)}
        />

        <span className="text-[12px] text-primario-900 text-left cursor-pointer">
          Deseo incluir en la simulación del crédito el valor de los seguros
          correspondientes.
        </span>
      </button>

      <Button
        isLanding="w-full md:w-[375px] mx-auto mt-[32px]"
        onClick={onSubmit}
        data-testid="btnSubmitDataForm"
        disabled={isValid()}
      >
        Continuar
      </Button>
    </div>
  );
}
