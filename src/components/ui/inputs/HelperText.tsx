import React from 'react';

interface HelperTextProps {
  text: string;
  error: boolean;
  className?: string;
}

export function HelperText({ text, error, className = '' }: HelperTextProps) {
  return (
    <div className={`flex items-center help pl-2 pt-1 ${className}`}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[4px]"
      >
        <circle cx="6" cy="6" r="6" fill={`${error ? '#ce1126' : '#496374'}`} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.82803 8.80259H6.06541V5.05259H4.82803C4.64557 5.05259 4.5 4.90702 4.5 4.76144C4.5 4.57996 4.64557 4.43439 4.82803 4.43439H6.39344C6.53901 4.43439 6.68459 4.57996 6.68459 4.76144V8.80259H7.92197C8.10443 8.80259 8.25 8.91226 8.25 9.09374C8.25 9.2762 8.10443 9.42177 7.92197 9.42177H4.82803C4.64557 9.42177 4.5 9.2762 4.5 9.09374C4.5 8.91226 4.64557 8.80259 4.82803 8.80259V8.80259Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.06553 3.81541C5.62881 3.81541 5.30078 3.45148 5.30078 3.01475C5.30078 2.61394 5.62881 2.25 6.06553 2.25C6.50226 2.25 6.86619 2.61394 6.86619 3.01475C6.86619 3.45148 6.50226 3.81541 6.06553 3.81541V3.81541Z"
          fill="white"
        />
      </svg>
      <p
        className={`font-montserratRegular font-light text-[10px] pt-[1px] m-0 leading-[12px] ${
          error ? 'text-rojo-20' : 'text-azul_gris-100'
        } float-left whitespace-nowrap`}
      >
        <span>{text}</span>
      </p>
    </div>
  );
}
