import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem } from '@mui/material';
import { Label } from '../Label';
import { MessageError } from './messageError';
import NewInput from './newInput';
import ReactHookFormSelect from '../Select/newSelect';
import { calculateAge } from '../../../utils';

interface InputProps {
  placeholder?: string;
  id?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  isLoading?: boolean;
  label?: string;
  error?: string;
  onChangeDate?: (value: any) => any;
  itemProp?: string;
  defaultValues?: string;
}

const DateOfBirth: React.FC<InputProps> = ({
  label = 'Fecha de nacimiento',
  defaultValues,
  id,
  onChangeDate,
  disabled
}) => {
  const dateDefault = defaultValues?.split('-');
  const [ageError, setAgeError] = useState<string | undefined>(undefined);
  const days = [
    {
      numero: '01',
      dia: '1',
    },
    {
      numero: '02',
      dia: '2',
    },
    {
      numero: '03',
      dia: '3',
    },
    {
      numero: '04',
      dia: '4',
    },

    {
      numero: '05',
      dia: '5',
    },
    {
      numero: '06',
      dia: '6',
    },
    {
      numero: '07',
      dia: '7',
    },
    {
      numero: '08',
      dia: '8',
    },
    {
      numero: '09',
      dia: '9',
    },
    {
      numero: '10',
      dia: '10',
    },
    {
      numero: '11',
      dia: '11',
    },
    {
      numero: '12',
      dia: '12',
    },
    {
      numero: '13',
      dia: '13',
    },
    {
      numero: '14',
      dia: '14',
    },
    {
      numero: '15',
      dia: '15',
    },

    {
      numero: '16',
      dia: '16',
    },
    {
      numero: '17',
      dia: '17',
    },
    {
      numero: '18',
      dia: '18',
    },
    {
      numero: '19',
      dia: '19',
    },
    {
      numero: '20',
      dia: '20',
    },
    {
      numero: '21',
      dia: '21',
    },
    {
      numero: '22',
      dia: '22',
    },
    {
      numero: '23',
      dia: '23',
    },
    {
      numero: '24',
      dia: '24',
    },
    {
      numero: '25',
      dia: '25',
    },
    {
      numero: '26',
      dia: '26',
    },
    {
      numero: '27',
      dia: '27',
    },
    {
      numero: '28',
      dia: '28',
    },
    {
      numero: '29',
      dia: '29',
    },
    {
      numero: '30',
      dia: '30',
    },
    {
      numero: '31',
      dia: '31',
    },
  ];
  const months = [
    { mes: 'Enero', numero: '01' },

    {
      mes: 'Febrero',
      numero: '02',
    },
    {
      mes: 'Marzo',
      numero: '03',
    },
    {
      mes: 'Abril',
      numero: '04',
    },
    {
      mes: 'Mayo',
      numero: '05',
    },
    {
      mes: 'Junio',
      numero: '06',
    },
    {
      mes: 'Julio',
      numero: '07',
    },
    {
      mes: 'Agosto',
      numero: '08',
    },
    {
      mes: 'September',
      numero: '09',
    },
    {
      mes: 'Octubre',
      numero: '10',
    },
    {
      mes: 'Noviembre',
      numero: '11',
    },
    {
      mes: 'Diciembre',
      numero: '12',
    },
  ];
  const { register, watch, control, setValue } = useForm<{
    day: string;
    month: string;
    year: string;
  }>({
    mode: 'onChange',
    defaultValues: {
      day: dateDefault?.[2],
      month: dateDefault?.[1],
      year: dateDefault?.[0],
    },
  });

  const allowOnlyNumber = (value: any) => {
    setValue('year', value.replace(/[^0-9]+/g, ''));
  };
  const fields = watch();


  useEffect(() => {
    const date = `${fields.day}/${fields.month}/${fields.year}`;
    const dateFormat = `${fields.year}-${parseInt(fields.month, 10) < 10 && fields.month.length < 2
      ? `0${fields.month}`
      : fields.month
      }-${parseInt(fields.day, 10) < 10 && fields.day.length < 2
        ? `0${fields.day}`
        : fields.day
      }`;


    if (fields.day === (0 || undefined) || fields.month === (0 || undefined)) {
      onChangeDate?.(undefined);
      return;
    }
    if (fields.year && fields.year?.length < 4) {
      onChangeDate?.(undefined);
      return;
    }
    if (fields.year?.length > 4) {
      return;
    }

    if (calculateAge(date) >= 18 && calculateAge(date) <= 69) {
      setAgeError(undefined);
      onChangeDate?.(dateFormat);
    } else {
      setAgeError('Fecha inválida');
      onChangeDate?.(undefined);
    }
  }, [fields.day, fields.month, fields.year]);

  return (
    <div
      data-testid="birth"
      itemProp="birthDate"
      className={`flex flex-col justify-start ${ageError ? 'pb-[2px]' : 'pb-[0px]'} `}
    >
      <Label className="text-[10px] text-complementario-100">{label}</Label>
      <div className="flex justify-between max-h-[48px] mt-3 gap-2">
        <div className="w-full max-h-[52px] ">
          <ReactHookFormSelect
            valueLength={fields?.day}
            left="right13"
            id={`${id}-day`}
            name="day"
            className="w-100"
            label="Día"
            dataTestId="dayDateOfBithTest"
            control={control}
            value={fields.day || ''}
            margin="normal"
            disabled={disabled}
            onChange={(e: any) => setValue('day', e.target.value)}
          >
            {days.map((a) => (
              <MenuItem key={a.dia + 5} value={a.numero}>
                {' '}
                {a.dia}
              </MenuItem>
            ))}
          </ReactHookFormSelect>
        </div>
        <div className="w-full  max-h-[52px]">
          <ReactHookFormSelect
            left="right8"
            id={`${id}-month`}
            name="month"
            valueLength={fields.month}
            className="w-100"
            label="Mes"
            control={control}
            // defaultValue={fields.month || ''}
            value={fields.month}
            margin="normal"
            disabled={disabled}
            dataTestId="monthDateOfBithTest"
            onChange={(e: any) => setValue('month', e.target.value)}
          >
            {months.map((a) => (
              <MenuItem key={a.mes + 2} value={a.numero}>
                {' '}
                {a.mes}
              </MenuItem>
            ))}
          </ReactHookFormSelect>
        </div>
        <div className="w-full flex-col ">
          <Controller
            rules={{ required: true, minLength: 5, maxLength: 4 }}
            render={({ field }) => (
              <NewInput
                label="Año"
                {...register('year', {
                  maxLength: 4,
                  onChange(event) {
                    allowOnlyNumber(event.target.value);
                  },
                })}
                {...field}
                value={fields.year || ''}
                valueLength
                tabIndex={0}
                type="text"
                disabled={disabled}
                inputMode="numeric"
                dataTestId="yearDateOfBithTest"
                maxLength={4}
                id={`${id}-year`}
              />
            )}
            name="year"
            control={control}
          />
        </div>

      </div>
      <div className="flex justify-end mr-[0.3rem] md:mr-[2rem] lg:mr-[6rem]">
        {ageError && fields.year && (
          <div className="mt-[5px]" data-testid="messageErrorDateOfBirth">
            <MessageError message={ageError} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateOfBirth;
