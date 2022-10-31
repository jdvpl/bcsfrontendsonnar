/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import cityData from '../../../lib/cities.json';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { ExampleInfo } from '../../commons/ExampleInfo';
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
          className={`position-absolute ${
            internalState ? 'top-[18.5px]' : 'top-[17.5px]'
          } left-[10px]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.67865 9.40657L15.4898 15.5318C15.5786 15.6568 15.5786 15.8126 15.4898 15.9375C15.4308 15.9692 15.3718 16 15.2838 16C15.2248 16 15.1658 15.9692 15.1068 15.9375L9.32479 9.78143C9.32479 9.78143 9.29491 9.75061 9.29491 9.71896C8.35129 10.6253 7.112 11.1876 5.72566 11.1876C2.80515 11.1876 0.445312 8.68767 0.445312 5.59379C0.445312 2.49992 2.80515 0 5.72566 0C8.64617 0 11.006 2.49992 11.006 5.59379C11.006 7.06242 10.4752 8.37528 9.61967 9.37575C9.64876 9.37575 9.67865 9.40657 9.67865 9.40657ZM5.72566 10.6567C8.38038 10.6567 10.5043 8.40671 10.5043 5.59357C10.5043 2.81292 8.38038 0.53125 5.72566 0.53125C3.10003 0.53125 0.947005 2.81292 0.947005 5.59357C0.947005 8.40671 3.10003 10.6567 5.72566 10.6567Z"
              fill="#496374"
            />
          </svg>
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
