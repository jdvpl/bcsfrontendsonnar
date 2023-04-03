import { MenuItem } from '@mui/material'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import NewAutoComplete from '../ui/inputs/newAutoComplete'
import ReactHookFormSelect from '../ui/Select/newSelect'
import {SimulationData} from '../../interfaces/simulator'

const CityStratum = ({setValue,rules,errorStratum}:any) => {

  const {
    control,
  } = useForm();

  return (
    <div className="grid mt-4 grid-col-1 md:grid-cols-2 gap-x-4 gap-y-4">
      <Controller
        control={control}
        name="city"
        rules={rules}
        defaultValue={undefined}
        render={({ field: { onChange } }) => (
          <NewAutoComplete
            id="birthCity"
            defaultValue={undefined}
            placeholder="Ciudad de la vivienda"
            label="Ciudad de la vivienda"
            onChange={(e: any) => {
              if (e?.id) {
                setValue('city',{ item: e.name, option: e.id })
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
        id="stratum"
        className="w-full md:mt-0 "
        margin="normal"
        rules={rules}
        error={errorStratum}
      >
        {[1, 2, 3, 4, 5, 6]?.map((y: number) => (
          <MenuItem value={y} key={y}>
            {y}
          </MenuItem>
        ))}
      </ReactHookFormSelect>
    </div>
  )
}

export default CityStratum
