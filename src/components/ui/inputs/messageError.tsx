import Icons from "../icons";

export const MessageError: React.FC<{ message: string }> = ({ message }) => (
  <div className="mt-[5px] flex items-center max-h-[12px]">
    <div className="ml-2 mr-1">
      <Icons icon="bcs-icon-300" color="text-rojo-20" />
    </div>
    <p className="text-xs leading-[18px] font-normal text-rojo-20">{message}</p>
  </div>
);
