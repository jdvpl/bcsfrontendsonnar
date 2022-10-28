export const dynamicClasses = (
  hiddenCard: boolean,
  showActiveCard: boolean,
  color: string,
  instructiveCard: boolean,
  instructiveNoSubdescriptionCard: boolean,
  clarificationCard: boolean,
  editableCard: boolean
) => {
  const showActiveCardStyles = showActiveCard ? 'showActiveCard' : '';
  // main clases dynamically if hidden card
  const mainCardClasses = hiddenCard
    ? 'pointer-events-none border-gris-90 hover:border-azul_gris-50 shadow-none'
    : `cursor-pointer  border-azul_gris-80 hover:border-primario-400 shadow-lg ${showActiveCardStyles}`;

  //? classes of each component
  // main card styles
  const mainCardStyles = instructiveCard
    ? 'flex py-4 pl-4 rounded-lg bg-gris-80'
    : instructiveNoSubdescriptionCard
    ? 'flex py-4 pl-4 rounded-lg bg-gris-90'
    : clarificationCard
    ? 'grid grid-cols-3 rounded-md bg-gris-90'
    : editableCard
    ? 'grid p-4 rounded-md flex-cols-3 bg-gris-90'
    : `b-4 card-shipping relative xl:flex flex md:flex sm:flex-row items-center w-full px-[16px] rounded-l-lg  select-none py-[20px] rounded-r-xl bg-smmoth border ${mainCardClasses}`;

  const containerIconStyle =
    instructiveCard || instructiveNoSubdescriptionCard || editableCard
      ? ''
      : 'icon-shipping h-[4.25rem] max-w-[4rem] max-h-[4.25rem] mim-w-[4rem] min-h-[4.25rem] mr-5 justify-center w-full flex items-center rounded-[0.75rem] bg-gris-90';
  /* A variable that is being used to change the color of the icon. */
  const iconColorStyle = hiddenCard ? 'text-azul_gris-90' : color;

  const haderCardTitleStyle = instructiveCard
    ? 'text-sm font-light text-primario-900 leading-[0.625rem] m-0'
    : instructiveNoSubdescriptionCard
    ? 'mx-2 my-0 font-semibold mext-base text-primario-900'
    : clarificationCard
    ? 'font-semibold text-[16px] leading-[18px] text-primario-900'
    : `text-[1.125rem] font-semibold leading-8 ${
        hiddenCard ? 'text-azul_gris-90' : 'text-primario-900'
      } m-0 tracking-normal`;
  const descriptionCardStyle = instructiveCard
    ? 'text-primario-900'
    : instructiveNoSubdescriptionCard
    ? 'ml-2 inline text-sm text-primario-900'
    : clarificationCard
    ? 'm-0 text-2xl font-bold text-azul_gris-100'
    : `font-light leading-[1.125rem] text-[0.875rem] m-0 tracking-normal ${
        hiddenCard ? 'text-azul_gris-90' : 'text-azul_gris-100'
      }`;

  const subdescriptionCardStyle =
    'pr-4 mt-1 text-sm font-light leading-4 text-primario-900';
  const spanCardStyle = `hover:border-azul_gris-50 absolute inline-block w-8 h-8  rounded-full top-[calc(50%-1rem)] right-4 check-border-check-blue border-azul_gris-80 ${
    hiddenCard ? 'bg-gris-90 border-none' : 'bg-white border'
  } `;

  const clarificationContainerTextCardStyleDiv =
    'col-span-2 p-4 pl-4 rounded-md md:pl-4 lg:pl-7';

  const clarificationContainerStyle =
    'rounded-xl p-4 bg-gris-80 text-center text-[1rem] md:pt-5 md:text-[0.8rem] leading-4';

  const editableCardHeaderTitleStyle =
    'mx-2 my-0 font-semibold mext-base text-primario-900';

  const editableCardDescriptionStyle = 'inline ml-2 text-sm text-primario-900';

  const editableIconSectionsStyle =
    'flex items-end justify-end w-full cursor-pointer items-flex-end';

  const editableTextSectionsStyle =
    'inline m-0 text-sm font-bold text-primario-100';
  return {
    mainCardStyles,
    iconColorStyle,
    spanCardStyle,
    haderCardTitleStyle,
    descriptionCardStyle,
    subdescriptionCardStyle,
    containerIconStyle,
    clarificationContainerTextCardStyleDiv,
    editableCardHeaderTitleStyle,
    editableCardDescriptionStyle,
    editableIconSectionsStyle,
    editableTextSectionsStyle,
    clarificationContainerStyle,
  };
};
