/* eslint-disable */
import React, { useState } from 'react';
import cityData from '../../../lib/cities.json';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ExampleInfo from '../../commons/ExampleInfo';
import Icons from '../icons';
import { InputAdornment } from '@mui/material';
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
}

const NewAutoComplete: React.FC<InputProps> = ({
  example,
  label = 'Ciudad',
  placeholder = 'Ciudad',
  id,
  defaultValue,
  onChange,
  zIndex = 20,
}) => {
  const [clearError] = useState(false);
  const OPTIONS_LIMIT = 10;
  const defaultFilterOptions = createFilterOptions();

  const filterOptions = (options: any, state: any) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };
  const [initialBorder, setBorder] = useState('#798c98a6');
  const [internalState, setInternalState] = useState('');

  const arrayCitys: any[] = cityData.details;

  return (
    <div
      id="select-autocomplete"
      data-testid={'searchAutocomplete'}
      itemScope
      itemType="http://schema.org/Person"
      className="flex flex-col justify-start relative"
    >
      {/* eslint-disable-line no-use-before-define */}
      <Icons icon="bcs-search" size="text-[17px] absolute left-2 top-3" />
      <div className="" id={id}>
        <Autocomplete
          filterOptions={filterOptions}
          id={id}
          blurOnSelect
          clearOnBlur
          clearOnEscape
          clearIcon={false}
          autoComplete={true}
          getOptionLabel={(option: any) => option.name}
          defaultValue={defaultValue}
          data-testid={'searchAutocompleteInput'}
          onChange={(_, value: any) => {
            if (value) {
              onChange?.({
                id: value.id,
                name: value.name,
                parentId: value.parentid,
                hasAdviser: value?.hasAdviser,
                nameAdviser: value?.nameAdviser,
              });
              setBorder('#798C98');
              setInternalState(value);
            } else {
              onChange?.({});
              setInternalState('');
              setBorder('#F35163');
            }
          }}
          options={arrayCitys}
          sx={{
            width: '100%',
            color: '#00253D',
            fontSize: '14px',
            '.MuiFormLabel-root': {
              fontSize: '14px',
              width: 'fit-content !important',
            },
            '&.Mui-focused .MuiFormLabel-root': {
              fontSize: '14px',
              width: 'fit-content !important',
              color: '#0072c8',
              paddingLeft: '4px',
              margin: '0px',
              left: '-4px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2972C8',
              borderWidth: '1px',
            },
            '.MuiInputLabel-outlined': {
              fontSize: '14px',
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: initialBorder,
              borderWidth: '1px',
            },
            '.MuiInputBase-root': {
              paddingTop: '6px !important',
              borderColor: initialBorder,
            },
            '&.Mui-focused .MuiInputBase-root': {
              borderColor: 'red',
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
              borderColor: '#2972C8',
              borderWidth: '1px !important',
            },
            '&:hover .MuiOutlinedInput-notchedOutline > label': {
              borderColor: '#2972C8 !important',
              borderWidth: '1px',
            },
            '&:hover .MuiOutlinedInput-root': {
              borderColor: '#2972C8 !important',
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
              defaultValue={defaultValue ? defaultValue?.name : undefined}
              {...params}
              sx={{
                '.MuiFormLabel-root': {
                  fontSize: '14px',
                  width: 'fit-content !important',
                  paddingLeft: params?.inputProps?.value ? '0px' : '20px',
                },
                '.MuiOutlinedInput-root': {
                  paddingLeft: '30px !important',
                },
              }}
              label={label}
              itemProp="homeLocation"
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
