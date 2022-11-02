import { FC, ReactNode } from 'react';
import { HelperText } from '../inputs/HelperText';
interface selectProps extends React.ComponentPropsWithoutRef<'select'> {
  /**
   *  Text box title
   * @type string
   * @default 'body'
   */
  label: string;
  /**
   *
   * @type string
   * @default 'body'
   */
  children?: ReactNode;
  /**
   *
   * @type string
   * @default 'body'
   */
  placeholder: string;
  /**
   *
   * @type string
   * @default 'body'
   */
  helperText?: string;
  /**
   *
   * @type string
   * @default 'body'
   */
  classNameInput?: string;
  /**
   *
   * @type string
   * @default 'body'
   */
  containerClassName?: string;
  /**
   *
   * @type boolean
   * @default 'body'
   */
  error?: true | false;
}

const Select: FC<selectProps> = ({
  label,
  children,
  placeholder,
  helperText = '',
  classNameInput,
  containerClassName,
  error = false,
  ...props
}) => {
  const SelectStyles = `
    :hover:cursor-pointer
    ${
      error
        ? 'border-rojo-100 focus:border-rojo-100 text-rojo-100'
        : 'focus:border-primario-20 text-primario-900'
    }
    h-12
    bg-[transparent] block py-2 pr-8 pl-3 w-full text-sm leading-none
    bg-transparent border-[0.03125rem] rounded-md border-[#798c98a6] appearance-none
    peer focus:border focus:outline-none`;

  const labelStyles = `peer-placeholder-shown:z-[-1] peer-focus:z-0 z-0
    peer-placeholder-shown:text-azul_gris-90 absolute text-sm
    ${error ? 'text-rojo-100' : 'text-azul_gris-100 '}
    duration-300 transform -translate-y-4 scale-75 top-2
    origin-[0] bg-white px-2 peer-focus:px-2
    ${error ? 'peer-focus:text-rojo-100 ' : 'peer-focus:text-azul_gris-100 '}
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6
    peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`;

  return (
    <div className="justify-center flex flex-col w-full">
      <div className="relative z-0 w-full">
        <select {...props} id="small" className={SelectStyles}>
          <option className="hidden" selected={false}>
            {placeholder}
          </option>
          {children}
        </select>

        <label htmlFor="floating_select" className={labelStyles}>
          {label}
        </label>

        {helperText && <HelperText text={helperText} error={error} />}
      </div>
    </div>
  );
};

export default Select;
