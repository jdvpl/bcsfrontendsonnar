import React, { useEffect, ClipboardEvent, useState } from 'react';
import { MenuItem } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Button from '../../Button';
import ReactHookFormSelect from '../../Select/newSelect';
import { SimulationData } from '../../../../interfaces';
import Input from '../../inputs';
import {
  convertToColombianPesos,
  handlerCity,
  parseOfficeName,
  renderPercentage,
} from '../../../../utils';
import { yearsAvailable } from '../../../../lib/simulator';
import useValidations from '../../../../hooks/useValidationsCreditData';
import { useSessionStorage } from '../../../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../../../session';
import useCreditForm from '../../../../hooks/useCreditForm';
import useProtectedRoutes from '../../../../hooks/useProtectedRoutes';
import { ApplicationLoader } from '../../Loaders/ApplicationLoader';
import NewAutoComplete from '../../inputs/newAutoComplete';
import Typography from '../../Typography';

export function CreditDataForm() {
  const [insuranceCheck] = useState(true);
  const [percentageFinance, setPercentageFinance] = useState(0.7);
  const [dataForm] = useSessionStorage(SesionStorageKeys.dataFormSimulation.key, {});
  const [mortgageValues, setDataForm] = useSessionStorage(
    SesionStorageKeys.mortgageValues.key,
    {}
  );
  const [personalData] = useSessionStorage(SesionStorageKeys.dataBasicData.key, {});
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

  const { setCurrentRouting } = useProtectedRoutes();

  const { changeOffice, choseOffice } = useCreditForm({ setOffices });
  const houseStatus = watch('houseStatus', 'new');
  const typeHouse = watch('typeHouse', 'novis');
  const houseValue = watch('houseValue', dataForm?.houseValue || 0);
  const financeValue = watch('financeValue', dataForm?.financeValue || 0);
  const termFinance = watch('termFinance', dataForm?.termFinance || 0);
  const office = watch('office', dataForm?.office || 0);
  const stratum = watch('stratum', 0);
  const amortizationType = watch('amortizationType', 'Pesos');
  const houseCity = watch('houseCity', '');
  const { automationFinanceValue, onSubmit, isValid, isLoading } = useValidations(
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
    setCurrentRouting,
    mortgageValues,
    amortizationType,
    houseCity
  );
  useEffect(() => {
    if (Object.entries(mortgageValues).length === 0) {
      setValue('financeValue', dataForm?.financeValue || 0);
      setValue('houseValue', dataForm?.houseValue || 0);
      setValue('termFinance', dataForm?.termFinance || undefined);
      setValue('typeHouse', 'novis');
      setValue('houseStatus', 'used');
      setValue('amortizationType', 'Pesos');
    }
  }, []);
  return (
    <div className="flex flex-col items-center">
      {isLoading ? <ApplicationLoader /> : null}
      {/* Form When Person chose Hose */}
      <div className="flex flex-col items-center gap-y-[12px] w-full mb-[30px]">
        <div
          data-testid="InputTypeHouse"
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
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
            <MenuItem value="novis">No VIS</MenuItem>
            <MenuItem value="vis">VIS</MenuItem>
          </ReactHookFormSelect>
          <ReactHookFormSelect
            onChange={(e: any) => setValue('houseStatus', e.target.value)}
            placeholder="Estado de la vivienda"
            label="Estado de la vivienda"
            defaultValue="usada"
            control={control}
            left="right4"
            valueLength=""
            name="houseStatus"
            className=""
            margin="normal"
            rules={{ required: true }}
          >
            <MenuItem value="new">Nueva</MenuItem>
            <MenuItem value="used">Usada</MenuItem>
          </ReactHookFormSelect>
        </div>
        <div className="w-full" data-testid="InputHouseLocation">
          <Controller
            control={control}
            name="houseCity"
            rules={{ required: true }}
            defaultValue={undefined}
            render={({ field: { onChange } }) => (
              <NewAutoComplete
                id="houseCity"
                defaultValue={undefined}
                placeholder="Ciudad de la vivienda"
                label="Ciudad de la vivienda"
                onChange={(e: any) => handlerCity(e, onChange)}
                zIndex={30}
              />
            )}
          />
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
            {renderPercentage(percentageFinance)}%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <ReactHookFormSelect
            onChange={(e: any) => setValue('termFinance', e.target.value)}
            placeholder="Plazo"
            label="Plazo"
            defaultValue=""
            control={control}
            left="right4"
            valueLength=""
            name="termFinance"
            className="w-full"
            margin="normal"
            rules={{ required: true }}
          >
            {yearsAvailable?.map((y) => (
              <MenuItem value={y} key={y}>
                {y} años
              </MenuItem>
            ))}
          </ReactHookFormSelect>
          <ReactHookFormSelect
            onChange={(e: any) => setValue('stratum', e.target.value)}
            placeholder="Estrato de la vivienda"
            label="Estrato de la vivienda"
            defaultValue=""
            control={control}
            left="right4"
            valueLength=""
            name="stratum"
            className="w-full"
            margin="normal"
            rules={{ required: true }}
          >
            {[1, 2, 3, 4, 5, 6]?.map((y) => (
              <MenuItem value={y} key={y}>
                {y}
              </MenuItem>
            ))}
          </ReactHookFormSelect>
        </div>

        <ReactHookFormSelect
          onChange={(e: any) => setValue('amortizationType', e.target.value)}
          placeholder="Tipo de amortización"
          label="Tipo de amortización"
          defaultValue="Pesos"
          control={control}
          left="right4"
          name="amortizationType"
          className="w-full"
          margin="normal"
          rules={{ required: true }}
        >
          <MenuItem value="Pesos">Pesos</MenuItem>
          <MenuItem value="uvr" disabled>
            UVR
          </MenuItem>
        </ReactHookFormSelect>
        {/* Card Chose Housing */}
        <div className="cardShadow min-h-[106px] mt-[23px] rounded-xl pt-[24px] pb-[23px] px-[24px] w-full flex flex-col gap-4">
          <div>
            <Typography
              variant="bodyM3"
              componentHTML="span"
              typeFont="Bold"
              className="w-full  text-primario-900 "
            >
              Elija como continuar el proceso
            </Typography>
          </div>
          <div className="flex flex-col gap-5">
            <button
              className="flex cursor-pointer"
              onClick={() => changeOffice(true)}
              data-testid="Button-Yes"
            >
              <div className="w-[25px] h-[25px] border border-complementario-100 flex justify-center items-center rounded-full">
                {choseOffice ? (
                  <div className="w-[10px] h-[10px] bg-primario-200 rounded-full"> </div>
                ) : null}
              </div>
              <Typography
                variant="bodyM3"
                componentHTML="span"
                typeFont="Regular"
                className="font-normal text-primario-900 ml-[10px]"
              >
                Acercarme a una oficina
              </Typography>
            </button>

            {choseOffice ? (
              <div className="w-full" data-testid="InputOffices">
                <Controller
                  control={control}
                  name="office"
                  defaultValue={undefined}
                  render={({ field: { onChange } }) => (
                    <NewAutoComplete
                      defaultValue={undefined}
                      placeholder="Oficina de preferencia"
                      label="Sucursal"
                      arrayOptions={offices}
                      getLabelHandler={(option: any) => {
                        return parseOfficeName(option);
                      }}
                      onChange={(e: any) => {
                        if (e?.idOffice) {
                          return onChange(e);
                        }
                        return onChange(undefined);
                      }}
                      zIndex={30}
                    />
                  )}
                />
              </div>
            ) : null}

            {personalData?.hasAdviser ? (
              <button
                data-testid="Button-No"
                className="flex  cursor-pointer"
                onClick={() => changeOffice(false)}
              >
                <div className="mr-[15px] w-[25px] h-[25px] border border-complementario-100 flex justify-center items-center rounded-full">
                  {!choseOffice ? (
                    <div className="w-[10px] h-[10px] bg-primario-200 rounded-full">
                      {' '}
                    </div>
                  ) : null}
                </div>
                <Typography
                  variant="bodyM3"
                  componentHTML="span"
                  typeFont="Regular"
                  className="font-normal text-primario-900 "
                >
                  Recibir visita asesor
                </Typography>
              </button>
            ) : null}
          </div>
        </div>
      </div>
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
