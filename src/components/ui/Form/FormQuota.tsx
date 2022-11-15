import { MenuItem } from '@mui/material'
import React, { ClipboardEvent, FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { iFormDataSimulation } from '../../../interfaces';
import { convertToColombianPesos } from '../../../utils';
import Button from '../Button';
import Input from '../inputs';
import DateOfBirth from '../inputs/dateOfBirth';
import ReactHookFormSelect from '../Select/newSelect'

interface FormProps {
  onSubmit: (data: iFormDataSimulation) => void;
  defaultValues: iFormDataSimulation;
}

const FormQuota: FC<FormProps> = ({ onSubmit, defaultValues }) => {
  const [percentage, setpercentage] = useState<number>(0.3);
  const [quotaPerMonth, setquotaPerMonth] = useState(0)
  const [insuranceValue, setinsuranceValue] = useState(false);

  const {
    handleSubmit,
    watch,
    setError,
    control,
    setValue,
    register,
    formState: { errors, isValid },
  } = useForm<iFormDataSimulation>({ mode: 'onChange' });
  const typeHouse = watch('typeHouse', defaultValues.typeHouse);
  const monthlySalary = watch('monthlySalary', defaultValues.monthlySalary);
  const percentageQuotaData = watch('percentageQuota', defaultValues.percentageQuota);

  useEffect(() => {
    if (typeHouse === 'novis') {
      setpercentage(0.3);
      setValue('percentageQuota', 0.3);
      return;
    } else if (typeHouse === 'vis') {
      setValue('percentageQuota', 0.4);
      setpercentage(0.4);
    }
  }, [typeHouse]);

  const automationQuota = () => {
    setquotaPerMonth(monthlySalary * percentage)
    setValue('amountQuota', monthlySalary * percentage)

  }
  const yearsAvailable = [5, 6, 7, 8, 9, 10, 15, 20]

  const handleInsurance = () => {
    setinsuranceValue(!insuranceValue)
  }
  const getPercentage = (value: number | string) => {
    const percentage = (+value / monthlySalary)
    setpercentage(percentage)
    setValue('percentageQuota', percentage)
    return percentage;
  }

  return (
    <div className="">
      <div className="w-full mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReactHookFormSelect
            onChange={(e: any) => {
              setValue('typeHouse', e.target.value);
              automationQuota();
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
          >
            <MenuItem value="novis">No VIS</MenuItem>
            <MenuItem value="vis">VIS</MenuItem>
          </ReactHookFormSelect>

          <div className="flex flex-col mt-4">
            <Controller
              rules={{ required: true, min: 1000000 }}
              render={({ field }) => {
                return (
                  <Input
                    type="text"
                    error={!!errors.monthlySalary}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    value={convertToColombianPesos(field.value)}
                    tabIndex={0}
                    id="monthlySalary"
                    inputMode="text"
                    required
                    label="Ingreso mensual"
                    onKeyUp={automationQuota}
                    onChange={(e: any) => {
                      field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                    }}
                  />
                );
              }}
              name="monthlySalary"
              control={control}
            />
          </div>
          <div className="flex mt-4">
            <Controller

              render={({ field }) => {
                // field.value = quotaPerMonth;
                return (
                  <Input
                    type="text"
                    error={!!errors.amountQuota}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    value={convertToColombianPesos(Math.round(field.value))}
                    tabIndex={0}
                    helperText={errors.amountQuota?.message}
                    id="amountQuota"
                    inputMode="text"
                    required
                    label="Cuota mensual"
                    {...register('amountQuota')}
                    onChange={(e: any) => {
                      console.log(field.value)
                      if (typeHouse === 'vis') {
                        if (getPercentage(field.value) > 0.4 && !!e.nativeEvent.data) {
                          setError('amountQuota', {
                            type: 'manual',
                            message: 'El valor ingresador no debe superar el porcentaje permitido',
                          });
                          e.preventDefault();
                          return;
                        }
                      } else if (typeHouse === 'novis') {
                        if (getPercentage(field.value) > 0.3 && !!e.nativeEvent.data) {
                          setError('amountQuota', {
                            type: 'manual',
                            message: 'El valor ingresador no debe superar el porcentaje permitido',
                          });
                          e.preventDefault();
                          return;
                        }
                      }

                      field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                    }}
                  />
                );
              }}
              name="amountQuota"
              control={control}
            />
            <div className="bg-complementario-80 w-[98px] ml-3 rounded-md text-center grid place-items-center">
              <Input
                type="text"
                value={`${+(percentage.toFixed(2)) * 100}%`}
                id="percentageQuota"
                inputMode="text"
                {...register('percentageQuota')}
                disabled
              />
            </div>
          </div>

          <div className="mt-4">
            <ReactHookFormSelect
              onChange={(e: any) => setValue('termFinance', e.target.value)}
              placeholder="Plazo"
              label="Plazo"
              error={!!errors.termFinance}
              defaultValue=""
              control={control}
              left="right4"
              valueLength=""
              name="termFinance"
              className="w-100"
              margin="normal"
            >
              {yearsAvailable.map((y, i) => (
                <MenuItem value={y} key={i}>{y} años</MenuItem>
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
                  defaultValues={defaultValues?.dateOfBirth || undefined}
                  onChangeDate={(e) => {
                    onChange(e);
                  }}
                />
              )}
            />
          </div>
          <div className="flex items-start mt-4">
            <input
              {...register('insuranceCheck')}
              className="inline-block p-0 m-0 h-[18px] w-[18.6px] min-w-[18.6px]"
              checked={insuranceValue}
              aria-checked={insuranceValue}
              tabIndex={0}
              type="checkbox"
              id="insuranceCheck"
              onChange={handleInsurance}
            />
            <label
              htmlFor="insuranceCheck"
              className="inline-block font-normal text-black p-0 m-0 pl-[10px]"
              role="tabpanel"
              tabIndex={0}
              itemScope
              itemType="https://schema.org/Service"
            >
              Deseo incluir en la simulación del crédito el valor de los seguros correspondientes.
            </label>
          </div>
          <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-10">
            <Button
              isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px]"
              type="submit"
              name="openQuotaSimulation"
              data-testid="btn-openQuotaSimulation"
              tabIndex={0}
              disabled={
                (!errors.typeHouse?.message && !isValid)
              }
              id="btn-next"
            >
              Simular
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormQuota