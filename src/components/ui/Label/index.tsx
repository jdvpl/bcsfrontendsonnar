import { childrenProps } from '../../../interfaces/childrenProps';

interface labelProps extends childrenProps {
  htmlFor?: string;
  className?: string;
  disabled?: boolean;
}
export const Label: React.FC<labelProps> = ({
  htmlFor,
  className,
  children,
  disabled,
}) => (
  <label
    htmlFor={htmlFor}
    id={`label-${htmlFor}`}
    className={`text-xs leading-[14px] font-normal  mb-[2px] text-complementario-100
    arial-label="${htmlFor}"
    ${className || (disabled ? 'text-secondary-500' : 'text-azul_gris-100')}`}
    tabIndex={0}
    role="paragraph"
  >
    {children}
  </label>
);
