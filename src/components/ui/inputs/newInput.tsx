import React, { forwardRef, useState } from 'react';
import { ErrorInfo } from '../../commons/ErrorInfo';
import { ExampleInfo } from '../../commons/ExampleInfo';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  placeholder?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  isLoading?: boolean;
  example?: string;
  label?: string;
  valueLength?: boolean;
  errorLabel?: boolean;
  className?: string;
  containerClassName?: string;
  maxLength?: number;
  error?: any;
  helper?: string;
  errorText?: string;
  dataTestId?: string;
}

const NewInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      example,
      maxLength,
      label,
      valueLength,
      className,
      containerClassName,
      errorLabel,
      type,
      helper,
      error,
      errorText,
      dataTestId = "newInputTest",
      ...props
    },
    ref
  ) => {
    const disabled = props.isLoading || props.disabled;

    const [internalState, setInternalState] = useState(false);

    return (
      <div className="justify-center flex flex-col w-full   sm:max-w-full">
        <div className="relative z-0 w-full">
          <input
            ref={ref}
            maxLength={maxLength}
            type={type}
            data-testid={dataTestId}
            id={props.id}
            className={` w-100 hover-input h-12 bg-[transparent] block py-2 pr-3.5 pl-3  w-full text-sm leading-none text-primario-900 bg-transparent border  rounded-md border-[#798c98a6] appearance-none focus:border-1  focus:border-primario-100   ${errorLabel ? 'error-class border-2' : 'focus:focus-new  active:focus-new'
              }
            
            ${disabled ? 'br-gray' : ''
              } peer focus:border focus:outline-none error:bg-rojo-100`}
            placeholder=" "
            {...props}
            onWheelCapture={(e) => {
              const target = e.target as HTMLInputElement;
              if (
                target.hasAttribute('type') &&
                target.getAttribute('type') === 'number'
              ) {
                target.blur();
              }
            }}
            onKeyUp={(e: any) => {
              const t = e.target;

              if (t.hasAttribute('maxlength')) {
                t.value = t.value.slice(0, t.getAttribute('maxlength'));
              }
            }}
            onBlur={(e: any) => {
              const t = e.target;
              if (t.value !== '') {
                t.classList.add('border-active');
                setInternalState(true);
              } else {
                t.classList.remove('border-active');
                setInternalState(false);
              }
            }}
          />
          <label
            htmlFor="floating_text"
            className={`peer-placeholder-shown:z-[-1] peer-focus:z-0 z-0  absolute text-sm ${disabled ? 'native-azul_gris-100' : 'native-secondary-300'
              }  duration-300 peer-placeholder-shown:color-desactivado ${internalState ? 'color-activado' : 'color-desactivado'
              } transform -translate-y-5 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1.5`}
          >
            {label}
          </label>
          {example ? <ExampleInfo example={helper} /> : ''}
          {error ? <ErrorInfo example={errorText} /> : ''}
        </div>
      </div>
    );
  }
);

export default NewInput;
