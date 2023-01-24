/* eslint-disable */
import React from 'react';
import { useState } from 'react';
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
  const [initialBorder, setBorder] = useState('#B0C2CD');
  const [internalState, setInternalState] = useState('');

  const arrayCitys: any[] = cityData.details;

  return (
    <div
      id="select-autocomplete"
      data-testid={'searchAutocomplete'}
      itemScope
      itemType="http://schema.org/Person"
      className="flex mt-[16px] flex-col justify-start"
    >
      {/* eslint-disable-line no-use-before-define */}

      <div className="mt-[1px] position-relative" id={id} tabIndex={0}>
        <div
          className={`position-absolute h-full 'top-[3px]'
            } left-[7px] flex justify-center items-center `}
        >
          <Icons icon='bcs-search' size='text-[17px]' />

        </div>
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
              onChange?.({ id: value.id, name: value.name, parentId: value.parentid });
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
            ' .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
              left: '18px !important',
            },
            '.MuiAutocomplete-input': {
              paddingLeft: '24px !important',
            },
          }}
          renderInput={(params) => (
            <TextField
              defaultValue={defaultValue ? defaultValue?.name : undefined}
              {...params}
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
