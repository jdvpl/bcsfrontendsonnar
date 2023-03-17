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
  error?: boolean;
}

const AutoCompleteCustom: React.FC<InputProps> = ({
  example,
  label = '',
  placeholder = '',
  id,
  defaultValue,
  onChange,
  arrayOptions,
  error = false,
  zIndex = 20,
}) => {
  const OPTIONS_LIMIT = 10;
  const defaultFilterOptions = createFilterOptions();
  const [haveValue, setHaveValue] = useState(defaultValue ? true : false);
  const [internalState, setInternalState] = useState('');
  const filterOptions = (options: any, state: any) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <div
      id="select-autocomplete"
      data-testid={'searchAutocomplete'}
      itemScope
      className="flex flex-col justify-start relative"
    >
      <label
        className={`transition-all duration-300 ease-in-out absolute  font-montserratRegular
        ${internalState ? "-top-[6.5px] z-10 left-2 bg-white px-1 text-[10px] leading-[12px]" : "ml-3 text-[14px] leading-[16px] top-2/4 -translate-y-2/4"} 
        ${error ? "text-rojo-20" : "text-complementario-100 hover:text-complementario-100 peer-focus:hover:text-complementario-100"}`}
      >
        {haveValue ? label : placeholder}
      </label>
      <Autocomplete
        filterOptions={filterOptions}
        id={id}
        autoComplete={true}
        getOptionLabel={(option: any) => {
          return `${option?.address?.toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())} ${option?.nameOffice?.toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())} - ${option?.city?.toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())}`;
        }}
        defaultValue={defaultValue}
        data-testid={'searchAutocompleteInput'}
        onSelect={(value) => setInternalState("value")}
        onChange={(_, value: any) => {
          if (value) {
            onChange?.(value);
            setHaveValue(true);
            setInternalState("value");
          } else {
            onChange?.({});
            setHaveValue(false);
            setInternalState('');
          }
        }}
        options={arrayOptions}
        sx={{
          color: '#00253d',
          fontStyle: "normal",
          height: '48px',
          borderRadius: '8px',
          '.MuiSvgIcon-root ': {
            fill: 'transparent',
            height: '16px',
            width: '16px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#e9132b !important' : '#0386e6 !important',
            borderWidth: '0.5px !important',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#e9132b !important' : '#0386e6 !important',
            borderWidth: '0.5px !important',
          }
        }}
        renderInput={(params) => (
          <TextField
            onBlur={() => setInternalState(internalState === "focus" ? "" : "value")}
            onFocus={() => setInternalState("focus")}
            defaultValue={placeholder ? placeholder : undefined}
            {...params}
            onChange={(e) => {
              if (e.target.value) {
                setHaveValue(true);
                setInternalState(e.target.value)
              } else {
                setHaveValue(false);
                setInternalState("")
              }
            }}
            itemProp="homeLocation"
            sx={{
              '.MuiOutlinedInput-root': {
                height: '48px',
                color: '#00253d'
              },
              '.MuiSvgIcon-root': {
                fill: 'transparent',
                height: '16px',
                width: '16px',
              },
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#ce1126' : "#89a3b5",
                borderWidth: '0.5px',
                borderRadius: '8px',
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default AutoCompleteCustom;
