const dynamicClassesSelective = (hasTitle: boolean, className: string, activeCard: boolean) => {
  const activeClasses = activeCard ? 'bg-primario-20 text-white' : ''
  const mainClasesParentDiv = hasTitle
    ? `group b-4 relative sm:m-auto xl:flex flex md:flex flex-col md:flex-col lg:flex-col  md:justify-center md:text-center lg:justify-center lg:text-center items-center w-full px-[16px] rounded-l-lg  select-none py-[20px] rounded-r-xl cursor-pointer  hover:bg-primario-100 shadow-small-400 bg-white ${className} ${activeClasses}`
    : `relative xl:flex flex md:flex sm:flex-row  items-center  px-[16px] rounded-l-lg  select-none py-[0px] rounded-r-xl ${className}`;

  const iconContainerStyle = hasTitle
    ? `h-[4.25rem] max-w-[4rem] max-h-[4.25rem] mim-w-[4rem] mr-1 justify-center w-full flex items-center rounded-[0.75rem] bg-white group-hover:bg-primario-100 relative ${activeClasses}`
    : 'h-[4.25rem] max-w-[4rem] max-h-[4.25rem] mim-w-[4rem]  w-full flex items-center rounded-[0.75rem]  group-hover:bg-primario-20';
  return { mainClasesParentDiv, iconContainerStyle };
};

export default dynamicClassesSelective