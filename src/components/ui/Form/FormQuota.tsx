import { MenuItem } from '@mui/material'
import React, { ClipboardEvent, FC, KeyboardEvent, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { convertToColombianPesos } from '../../../utils';
import Button from '../Button';
import Input from '../inputs';
import DateOfBirth from '../inputs/dateOfBirth';
import ReactHookFormSelect from '../Select/newSelect'
import Typography from '../Tipography'


interface FormProps {
  onSubmit: (data: FormData) => void;
  defaultValues: FormData;
}
export interface FormData {
  type_house: string;
  monthly_salary: number;
  amount: string;
  term_finance: string;
  dateOfBirth: string;
}

const FormQuota: FC<FormProps> = ({ onSubmit, defaultValues }) => {
  const [percentage, setpercentage] = useState<number>(0.3);
  const [quotaPerMonth, setquotaPerMonth] = useState(0)
  const {
    handleSubmit,
    watch,
    setError,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });
  const typeHouse = watch('type_house', defaultValues.type_house);
  const monthlySalary = watch('monthly_salary', defaultValues.monthly_salary);
  const amountQuota = watch('amount', defaultValues.amount);

  useEffect(() => {
    if (typeHouse === 'novis') {
      setpercentage(0.3);
      return;
    } else if (typeHouse === 'vis') {
      setpercentage(0.4);
    }
  }, [typeHouse]);

  const automationQuota = () => {
    if (monthlySalary !== 0) {
      setquotaPerMonth(monthlySalary * percentage)
    }
  }
  const yearsAvailable = [5, 6, 7, 8, 9, 10, 15, 20]

  return (
    <div className="">
      <div className="w-full mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReactHookFormSelect
            onChange={(e: any) => setValue('type_house', e.target.value)}
            placeholder="Tipo de vivienda"
            label="Tipo de vivienda"
            error={!!errors.type_house}
            defaultValue="novis"
            control={control}
            left="right4"
            valueLength=""
            name="type_house"
            className="w-100"
            margin="normal"
            onBlur={automationQuota}
          >
            <MenuItem value="novis">No VIS</MenuItem>
            <MenuItem value="vis">VIS</MenuItem>
          </ReactHookFormSelect>

          <div className="flex flex-col mt-4">
            <Controller
              rules={{ required: true, minLength: 5, maxLength: 10 }}
              render={({ field }) => {
                console.log(field.value)
                return (
                  <Input
                    type="text"
                    error={!!errors.monthly_salary}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    value={convertToColombianPesos(field.value)}
                    tabIndex={0}
                    id="monthly_salary"
                    inputMode="text"
                    required
                    label="Ingreso mensual"
                    onBlur={automationQuota}
                    onChange={(e: any) => {
                      field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                    }}
                  />
                );
              }}
              name="monthly_salary"
              control={control}
            />
          </div>
          <div className="flex mt-4">
            <Controller
              render={({ field }) => {
                return (
                  <Input
                    type="text"
                    error={!!errors.amount}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    value={convertToColombianPesos(quotaPerMonth)}
                    tabIndex={0}
                    id="amount"
                    inputMode="text"
                    required
                    label="Cuota mensual"
                    onChange={(e: any) => {
                      field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                    }}
                  />
                );
              }}
              name="amount"
              control={control}
            />
            <div className="bg-complementario-80 w-[78px] ml-3 rounded-md text-center grid place-items-center">
              <Typography variant="caption1">{percentage * 100}%</Typography>
            </div>
          </div>

          <div className="mt-4">
            <ReactHookFormSelect
              onChange={(e: any) => setValue('term_finance', e.target.value)}
              placeholder="Plazo"
              label="Plazo"
              error={!!errors.term_finance}
              defaultValue=""
              control={control}
              left="right4"
              valueLength=""
              name="term_finance"
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
          <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-10">
            <Button
              isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px]"
              type="submit"
              name="openQuotaSimulation"
              data-testid="btn-openQuotaSimulation"
              tabIndex={0}
              disabled={
                !typeHouse || (!errors.type_house?.message && !isValid)
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