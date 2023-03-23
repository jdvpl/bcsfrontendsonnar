/* eslint-disable */
import React, { useState } from 'react';
import cityData from '../../../lib/cities.json';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ExampleInfo from '../../commons/ExampleInfo';
import Icons from '../icons';
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
  onChange?: (value: any) => any;
  zIndex?: number;
  error?: boolean;
  arrayOptions?: any;
  getLabelHandler?: any;
}

const NewAutoComplete: React.FC<InputProps> = ({
  example,
  label = 'Ciudad',
  placeholder = 'Ciudad',
  id,
  defaultValue,
  onChange,
  zIndex = 20,
  error = false,
  getLabelHandler = (option: any) => option.name,
  arrayOptions = cityData.details
}) => {
  const OPTIONS_LIMIT = 10;
  const defaultFilterOptions = createFilterOptions();
  const filterOptions = (options: any, state: any) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };
  const [isFocus, setIsFocus] = useState(defaultValue ? true : false);
  const [internalState, setInternalState] = useState('');

  const [clearError] = useState(false);

  const defaultOnchange = (_: any, value: any) => {
    if (value) {
      onChange?.(value);
      setInternalState("value");
    } else {
      onChange?.({});
      setInternalState('');
    }
  }

  return (
    <div
      id="select-autocomplete"
      data-testid={'searchAutocomplete'}
      itemScope
      itemType="https://schema.org/Person"
      className="flex flex-col justify-start relative"
    >
      <label
        className={`transition-all duration-300 ease-in-out absolute  font-montserratRegular
        ${internalState || isFocus ? "-top-[6.5px] z-10 left-2 bg-white px-1 text-[10px] leading-[12px]" : "left-[36px] text-[14px] leading-[16px] top-2/4 -translate-y-2/4"} 
        ${error ? "text-rojo-20" : "text-complementario-100 hover:text-complementario-100 peer-focus:hover:text-complementario-100"}`}
      >
        {internalState ? label : placeholder}
      </label>
      {/* eslint-disable-line no-use-before-define */}
      <Icons icon="bcs-icon-2" size="text-[17px] absolute left-2 top-[15px]  " />
      <div className="" id={id}>
        <Autocomplete
          filterOptions={filterOptions}
          id={id}
          autoComplete={true}
          getOptionLabel={(option) => getLabelHandler(option)}
          defaultValue={defaultValue}
          data-testid={'searchAutocompleteInput'}
          onChange={defaultOnchange}
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
              onBlur={() => setIsFocus(false)}
              onFocus={() => setIsFocus(true)}
              defaultValue={placeholder ? placeholder : undefined}
              {...params}
              onChange={(e) => {
                if (e.target.value) {
                  setInternalState(e.target.value)
                } else {
                  setInternalState("")
                }
              }}
              itemProp="homeLocation"
              sx={{
                '.MuiOutlinedInput-root': {
                  height: '48px',
                  color: '#00253d',
                  paddingLeft: "32px"
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
      {clearError && <ExampleInfo example={'Seleccione una ciudad de la lista'} />}
      {example && <ExampleInfo example={example} />}
    </div>
  );
};

export default NewAutoComplete;
