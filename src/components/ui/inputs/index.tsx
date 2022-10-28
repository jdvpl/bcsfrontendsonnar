import { HelperText } from './HelperText';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Icon on the left side of the text box
   * @type string
   * @default ''
   */
  startIcon?: string;

  /**
   * Icon on the right side of the text box
   * @type string
   * @default ''
   */
  endIcon?: string;

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

  disabled?: true | false;
}

export function Input({
  label,
  classNameInput,
  containerClassName,
  error = false,
  helperText,
  startIcon,
  endIcon,
  autofocus = false,
  disabled = false,
  ...props
}: InputProps) {
  const labelStyles = `
  peer-placeholder-shown:z-[-1] peer-focus:z-0 z-0

  peer-placeholder-shown:text-azul_gris-90 absolute text-sm

  ${error ? 'text-rojo-100' : 'text-azul_gris-100 '}

  duration-300 transform -translate-y-4 scale-75 top-2
  origin-[0] bg-white px-2 peer-focus:px-2

  ${error ? 'peer-focus:text-rojo-100 ' : 'peer-focus:text-azul_gris-100 '}

  peer-placeholder-shown:scale-100
  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6
   peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1
  `;

  const inputStyles = `
  h-12 bg-[transparent] block py-2 px-3 w-full text-sm leading-none
    ${error ? 'text-rojo-100' : 'text-primario-900'}
    bg-transparent border-[0.03125rem] rounded-md
    ${
      error
        ? 'border-rojo-100 focus:border-rojo-100'
        : 'border-[#798c98a6] focus:border-primario-20'
    }
    appearance-none  peer focus:border focus:outline-none`;

  return (
    <div className={`${containerClassName} justify-center flex flex-col w-full`}>
      <div className="relative z-0 w-full">
        {startIcon && (
          <i
            className={`top-[16px] ml-2 absolute before:font-black leading-4 text-[16px] ${startIcon} text-azul_gris-50`}
          ></i>
        )}
        {endIcon && (
          <i
            className={`top-[16px] right-0 mr-2 absolute before:font-black leading-4 text-[16px] ${endIcon} text-azul_gris-50`}
          ></i>
        )}
        <input
          type="text"
          {...props}
          className={`${inputStyles} ${classNameInput}`}
          placeholder=" "
          autoFocus={autofocus}
          disabled={disabled}
        />
        <label htmlFor="floating_text" className={labelStyles}>
          {label}
        </label>
      </div>
      {helperText && <HelperText error={error} text={helperText} />}
    </div>
  );
}

export default Input;
