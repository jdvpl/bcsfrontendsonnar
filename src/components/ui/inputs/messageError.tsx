export const MessageError: React.FC<{ message: string }> = ({ message }) => (
  <div className="mt-[5px] flex items-center max-h-[12px]">
    <div className="ml-2 mr-1">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="6" fill="#F96459" />
        <rect x="5.25" y="2.25" width="1.5" height="5.25" rx="0.75" fill="white" />
        <circle cx="6" cy="9" r="0.75" fill="white" />
      </svg>
    </div>
    <p className="text-xs leading-[18px] font-normal text-red-300">{message}</p>
  </div>
);
