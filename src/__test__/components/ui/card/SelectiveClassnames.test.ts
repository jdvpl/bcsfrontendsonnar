import SelectiveClassnames from '../../../../components/ui/Card/SelectiveClassnames';

test('debe retornar el estilo correcto para el contenedor principal y el contenedor de icono', () => {
  // contenido de la prueba aquí
  const hasTitle = true;
  const className = 'mi-clase';
  const expectedOutput = {
    mainClasesParentDiv: 'group b-4 relative sm:m-auto xl:flex flex md:flex sm:flex-row md:flex-col lg:flex-col  md:justify-center md:text-center lg:justify-center lg:text-center items-center w-full px-[16px] rounded-l-lg  select-none py-[20px] rounded-r-xl cursor-pointer  hover:bg-primario-20 shadow-small-400 bg-white mi-clase ',
    iconContainerStyle: 'h-[4.25rem] max-w-[4rem] max-h-[4.25rem] mim-w-[4rem] mr-1 justify-center w-full flex items-center rounded-[0.75rem] bg-white group-hover:bg-primario-20 relative'
  };
  const output = SelectiveClassnames(hasTitle, className);
  expect(output).toEqual(expectedOutput);
});