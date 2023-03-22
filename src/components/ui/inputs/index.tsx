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

  const labelStyles = `-z-1 ${error ? "text-rojo-20" : "text-complementario-100"}
  absolute top-[50%] translate-y-[-50%] ${startIcon ? "left-[36px] " : "left-3 "} text-[14px] leading-[16px] font-montserratRegular transition-all duration-300 ease-in-out 
  peer-focus:left-2 peer-focus:top-0 peer-focus:text-[10px] peer-focus:leading-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:z-10
  ${props?.value ? "left-2 top-0 text-[10px] leading-[12px] bg-white px-1 z-10" : ""}
  `

  const inputStyles = `valid:text-primario-900 ${startIcon ? "pl-[36px]" : "pl-3"} ${endIcon ? "pr-[36px]" : "pr-3"}  peer  appearance-none font-montserratRegular text-[14px] leading-[16px] 
  h-[48px] bg-transparent border-[0.5px] rounded-[8px] bg-[transparent] w-full 
  ${error ? "border-rojo-20 hover:border-rojo-20 focus:border-rojo-20 " : "border-complementario-50 hover:border-primario-20 focus:border-primario-20 "} 
  peer-focus:border focus:outline-none`

  return (
    <div className={`${containerClassName} justify-center flex flex-col w-full`}>
      <div className="relative z-0 w-full">
        {startIcon && (
          <i
            className={`top-[16px] left-3 absolute before:font-black leading-4 text-[16px] ${startIcon} text-complementario-100 `}
          />
        )}
        {endIcon && (
          <i
            className={`top-[16px] right-3 absolute before:font-black leading-4 text-[16px] ${endIcon} text-complementario-100`}
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
        <label htmlFor="floating_text" className={`${labelStyles}`}>
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
