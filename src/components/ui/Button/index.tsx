import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactChild;
  isLoading?: boolean;
  disabled?: boolean;
  transition?: string;
  primary?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  isLanding?: string;
  border?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      disabled: buttonDisabled,
      transition,
      className,
      isLoading,
      isLanding,
      border = '0',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={`
        

        rounded h-[48px] transition-all duration-500  hover:shadow-media-300  text-lg leading-5
        ${
          isLanding ||
          'w-[288px] sm:w-[343px] sm:max-w-[343px] md:w-[343px] lg:w-[375px] lg:max-w-[375px] '
        }
          ${
            variant === 'primary'
              ? 'py-[10px] text-white bg-primario-100  hover:bg-primario-400  focus:text-secundario-200 focus:shadow-none disabled:text-[#ACD1ED] disabled:bg-gris-80 disabled:shadow-none font-montserratRegular'
              : ''
          }  
        ${
          variant === 'secondary'
            ? `valid:text-primario-100  py-[10px]  hover:shadow-none border-primario-100 bg-white text-primario-100 hover:border-primario-80  border-[${border}px] focus:text-white focus:shadow-none disabled:text-azul_gris-70 disabled:bg-gris-80 disabled:border-0 font-montserratRegular`
            : ''
        }
        ${className || ''}
        ${transition || ''}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
