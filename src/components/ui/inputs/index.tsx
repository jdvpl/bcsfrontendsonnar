import React from 'react';
import { IconListAvailable } from '../../../types';
import { HelperText } from './HelperText';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Icon on the left side of the text box
   * @type string
   * @default ''
   */
  startIcon?: IconListAvailable;
  labelColor?: string;

  /**
   * Icon on the right side of the text box
   * @type string
   * @default ''
   */
  endIcon?: IconListAvailable;

  /**
   *  Help text displayed in the lower part of the text box
   * @type string
   * @default ''
   */
  helperText?: string;

  /**
   *  Text box title
   * @type string
   * @default ''
   */
  label?: string;

  /**
   *  Class for adding custom styles to the text box
   * @type string
   * @default ''
   */
  classNameInput?: string;

  /**
   *  Class for adding custom styles to text box container
   * @type string
   * @default ''
   */
  containerClassName?: string;

  /**
   *  If you have any validation error the true field and the input changes color to red.
   * @type boolean
   * @default false
   */
  error?: true | false;

  /**
   *  Indicates whether the Input is selected or not
   * @type boolean
   * @default false
   */
  autofocus?: true | false;
  dataTestId?: string;
  helperTextOption?: boolean;
}

function Input({
  label,
  classNameInput,
  labelColor = 'text-complementario-100',
  containerClassName,
  error = false,
  helperText,
  startIcon,
  endIcon,
  autofocus = false,
  dataTestId,
  helperTextOption = false,
  ...props
}: InputProps) {
  const labelStyles = `
  peer-placeholder-shown:z-[-1] peer-focus:z-0 z-0

  peer-placeholder-shown:${labelColor} absolute text-sm
  peer-focus:text-primario-20
  ${error ? 'text-rojo-100' : `${labelColor}`}

  duration-300 transform -translate-y-4 scale-75 top-2
  origin-[0] bg-white px-2 peer-focus:px-2
  ${startIcon ? props?.value ? "left-1" : 'left-5 peer-focus:left-1' : 'left-1'}
  
  ${error ? 'peer-focus:text-rojo-100 ' : `peer-focus:${labelColor}`}

  peer-placeholder-shown:scale-100
  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6
   peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[19px] -translate-y-[19px]
  `;

  const inputStyles = `
  ${startIcon ? 'pl-8' : ''}
  ${endIcon ? 'pr-8' : ''}
  h-12 bg-[transparent] block py-2 px-3 w-full text-sm leading-none
    ${error ? 'text-complementario-100' : 'text-primario-900'}
    bg-transparent border-[0.03125rem] rounded-md
    ${error
      ? 'border-rojo-100 focus:border-rojo-100'
      : 'border-[#798c98a6] focus:border-primario-20'
    }
    appearance-none  peer focus:border focus:outline-none`;
  return (
    <div className={`${containerClassName} justify-center flex flex-col w-full`}>
      <div className="relative z-0 w-full">
        {startIcon && (
          <i
            className={`top-[16px] ml-2 absolute before:font-black leading-4 text-[16px] ${startIcon} text-complementario-50 `}
          />
        )}
        {endIcon && (
          <i
            className={`top-[16px] right-0 mr-2 absolute before:font-black leading-4 text-[16px] ${endIcon} text-complementario-50`}
          />
        )}
        <input
          type="text"
          data-testid={dataTestId}
          {...props}
          className={`${inputStyles} ${classNameInput}`}
          placeholder=" "
          autoFocus={autofocus}
          onWheelCapture={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.hasAttribute('type') && target.getAttribute('type') === 'number') {
              target.blur();
            }
          }}
        />
        <label htmlFor="floating_text" className={labelStyles}>
          {label}
        </label>
      </div>
      {helperText && error && <HelperText error={error} text={helperText} />}
      {helperText && helperTextOption && !error && (
        <HelperText error={false} text={helperText} />
      )}
    </div>
  );
}

export default Input;
