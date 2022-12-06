import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';

interface ToolTipProps {
  info: string;
  infohtml?: React.ReactNode;
  icon: React.ReactNode;
  id?: string;
  absolute?: boolean;
  padding?: boolean;
  className?: string;
}

export function ToolTipInfo({
  info,
  icon,
  id,
  absolute = false,
  padding = false,
  className,
  infohtml,
}: ToolTipProps) {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip();

  return (
    <>
      <button
        data-testid={`btn-tooltip-${id}`}
        id={`btn-tooltip-${id}`}
        type="button"
        ref={setTriggerRef}
        className={`ml-2  ${absolute ? 'position-absolute top-22' : ''}
        ${className || ''}
        `}
      >
        <div
          className="relative w-5  h-5 flex flex-col items-center group"
          aria-label={info}
        >
          {icon}
        </div>
      </button>
      {visible && (
        <span
          id={`card-tooltip-${id}`}
          ref={setTooltipRef}
          {...getTooltipProps({
            className: `tooltip-container max-w-[290px] ${padding ? 'pall-24' : 'pall-15'
              }`,
          })}
        >
          {infohtml}
          <span
            {...getArrowProps({
              className: 'tooltip-arrow',
            })}
          />
        </span>
      )}
    </>
  );
}
