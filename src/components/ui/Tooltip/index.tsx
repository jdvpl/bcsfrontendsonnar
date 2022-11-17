import { FC } from 'react';
import Icons from '../icons';

interface iTooltipProp {
  message: string;
}
const Tooltip: FC<iTooltipProp> = ({ message }) => {
  return (
    <div>
      <Icons
        icon="bcs-information"
        data-tooltip-target="tooltip-top"
        data-tooltip-placement="top"
        iconclassNames="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
      <div
        id="tooltip-top"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {message}
        <div className="tooltip-arrow" data-popper-arrow />
      </div>
    </div>
  );
};

export default Tooltip;
