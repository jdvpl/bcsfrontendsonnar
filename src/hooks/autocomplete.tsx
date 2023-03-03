/* eslint-disable */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
interface InputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  isLoading?: boolean;
  example?: string;
  id?: string;
  label?: string;
  full?: boolean;
  defaultValue?: any;
  value?: any;
  arrayOptions: any;
  onChange?: (value: any) => any;
  zIndex?: number;
}

const AutoCompleteCustom: React.FC<InputProps> = ({
  example,
  label = '',
  placeholder = '',
  id,
  defaultValue,
  onChange,
  arrayOptions,
  zIndex = 20,
}) => {
  const [clearError] = useState(false);
  const OPTIONS_LIMIT = 10;
  const defaultFilterOptions = createFilterOptions();

  const filterOptions = (options: any, state: any) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };
  const [initialBorder, setBorder] = useState('#B0C2CD');
  const [internalState, setInternalState] = useState('');

  //   const arrayOptions: any[] = cityData.details;

  return (
    <div
      id="select-autocomplete"
      data-testid={'searchAutocomplete'}
      itemScope
      className="flex flex-col justify-start"
    >
      {/* eslint-disable-line no-use-before-define */}

      {/* <div className="position-relative" id={id} tabIndex={0}> */}

      <Autocomplete
        filterOptions={filterOptions}
        id={id}
        placeholder="Seleccione la sucrusal de su preferencia"
        blurOnSelect
        clearOnBlur
        clearOnEscape
        clearIcon={false}
        autoComplete={true}
        getOptionLabel={(option: any) => {
          return `${option?.address?.toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())} ${option?.nameOffice?.toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())} - ${option?.city?.toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())}`;
        }}
        defaultValue={defaultValue}
        data-testid={'searchAutocompleteInput'}
        onChange={(_, value: any) => {
          if (value) {
            onChange?.(value);
            setBorder('#798C98');
            setInternalState(value);
          } else {
            onChange?.({});
            setInternalState('');
            setBorder('#F35163');
          }
        }}
        options={arrayOptions}
        sx={{
          width: '100%',
          color: '#00253D',
          fontSize: '14px',
          '.MuiFormLabel-root': {
            fontSize: '14px',
          },
          ',MuiInputLabel-outlined': {
            fontSize: '14px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: initialBorder,
            borderWidth: '1px',
          },
          '.MuiInputBase-root': {
            paddingTop: '6px !important',
          },
          '.MuiOutlinedInput-root': {
            paddingTop: '6px !important',
          },
          ' .MuiAutocomplete-inputRoot': {
            paddingTop: '6px !important',
          },
          ' .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0072C8',
            borderWidth: '1px !important',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0072C8 !important',
            borderWidth: '1px',
          },
          '.MuiOutlinedInput-notchedOutline > span': {
            paddingLeft: '0px',
            paddingRight: '0px',
          },
          '.MuiSvgIcon-root ': {
            fill: 'white',
            height: '16px',
            width: '16px',
          },
          '.MuiAutocomplete-popupIndicator': {
            width: '16px',
            height: '16px',
            position: 'absolute',
          },
          '.MuiAutocomplete-endAdornment': {
            width: '16px',
            height: '16px',
            right: '17px !important',
            top: '20px !important',
          },
        }}
        renderInput={(params) => (
          <TextField
            defaultValue={placeholder ? placeholder : undefined}
            {...params}
            label={label}
            placeholder={placeholder}
            itemProp="homeLocation"
          />
        )}
      />
    </div>
    // </div>
  );
};

export default AutoCompleteCustom;
