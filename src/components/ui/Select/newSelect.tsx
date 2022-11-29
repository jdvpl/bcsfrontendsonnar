import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import { Controller } from 'react-hook-form';

import { useEffect, useState } from 'react';
import { HelperText } from '../inputs/HelperText';

const ReactHookFormSelect: React.FC<any> = ({
  name,
  label,
  control,
  defaultValue,
  children,
  onChange,
  valueLength,
  left,
  margin,
  rules,
  helperText,
  error = false,
  dataTestId,
  ...props
}) => {
  const labelId = `${name}-label`;

  const [initialBorder, setBorder] = useState('#B0C2CD');
  const [initialIcon, setInitialIcon] = useState(
    `M15.5316 0.829999C15.6257 0.705105 15.8131 0.705105 15.9063 0.829999C16.0312 0.924086 16.0312 1.07979 15.9063 1.20468L8.19119 9.20125C8.12875 9.23205 8.0663 9.26369 8.00385 9.26369C7.9414 9.26369 7.84815 9.23205 7.81651 9.20125L0.0705653 1.20468C-0.0235218 1.07979 -0.0235218 0.924086 0.0705653 0.829999C0.19546 0.705105 0.351161 0.705105 0.476055 0.829999L8.00385 8.63839L15.5316 0.829999Z`
  );

  const selectValue = (e: any) => {
    onChange?.(e);
    setBorder('#798C98');
  };
  useEffect(() => {
    setInitialIcon(
      'M15.5316 3.83C15.6257 3.7051 15.8131 3.7051 15.9063 3.83C16.0312 3.92409 16.0312 4.07979 15.9063 4.20468L8.19119 12.2012C8.12875 12.2321 8.0663 12.2637 8.00385 12.2637C7.9414 12.2637 7.84815 12.2321 7.81651 12.2012L0.0705653 4.20468C-0.0235218 4.07979 -0.0235218 3.92409 0.0705653 3.83C0.19546 3.7051 0.351161 3.7051 0.476055 3.83L8.00385 11.6384L15.5316 3.83Z'
    );
  }, []);
  return (
    <FormControl {...props} fullWidth className={`position-relative ${props?.className}`}>
      <div className={`position-absolute ${left} top-1/3`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="w-[16px] h-[16px]"
        >
          <rect xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d={initialIcon} fill="#496374" />
        </svg>
      </div>
      <InputLabel
        htmlFor={labelId}
        id={labelId}
        sx={{
          color: error && '#ce1126',
        }}
      >
        {label}
      </InputLabel>
      <Controller
        defaultValue={defaultValue || ''}
        rules={rules}
        render={({ field }) => (
          <Select
            id={labelId}
            margin="none"
            data-testid={dataTestId}
            {...field}
            key={props.id}
            sx={{
              color: error ? '#ce1126' : '#00253D',
              fontSize: '14px',
              '.MuiFormLabel-root': {
                fontSize: '14px',
              },
              ',MuiInputLabel-outlined': {
                fontSize: '14px',
              },
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#ce1126' : initialBorder,
                borderWidth: '1px',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#ce1126' : '#2972C8',
                borderWidth: '1px',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#ce1126' : '#2972C8',
                borderWidth: '1px',
              },
              '.MuiSvgIcon-root ': {
                fill: 'white',
                height: '16px',
                width: '16px',
              },
              '.MuiFormControl-marginNormal': {
                marginTop: '0px !important',
              },
              '.css-1iledgx-MuiFormControl-root': {
                marginTop: '0px !important',
              },
            }}
            onOpen={() =>
              setInitialIcon(
                'M8.19129 3.80299L15.9063 11.7994C16.0312 11.9243 16.0312 12.08 15.9063 12.1741C15.8747 12.2366 15.7814 12.2674 15.719 12.2674C15.6565 12.2674 15.5941 12.2366 15.5317 12.1741L8.00395 4.365L0.476257 12.1741C0.351365 12.2674 0.194833 12.2674 0.0699399 12.1741C-0.0233133 12.08 -0.0233133 11.9243 0.0699399 11.7994L7.81662 3.80299C7.90987 3.7089 8.09721 3.7089 8.19129 3.80299Z'
              )
            }
            onClose={() =>
              setInitialIcon(
                'M15.5316 3.83C15.6257 3.7051 15.8131 3.7051 15.9063 3.83C16.0312 3.92409 16.0312 4.07979 15.9063 4.20468L8.19119 12.2012C8.12875 12.2321 8.0663 12.2637 8.00385 12.2637C7.9414 12.2637 7.84815 12.2321 7.81651 12.2012L0.0705653 4.20468C-0.0235218 4.07979 -0.0235218 3.92409 0.0705653 3.83C0.19546 3.7051 0.351161 3.7051 0.476055 3.83L8.00385 11.6384L15.5316 3.83Z'
              )
            }
            className="borde-rojo"
            color="primary"
            defaultValue={defaultValue || ''}
            onChange={selectValue}
            labelId={labelId}
            label={label}
          >
            {children}
          </Select>
        )}
        name={name}
        control={control}
      />
      {helperText ? <HelperText text={helperText} error={error} /> : null}
    </FormControl>
  );
};
export default ReactHookFormSelect;
