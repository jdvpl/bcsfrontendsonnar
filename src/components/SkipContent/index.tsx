import React from 'react';

export const SkipContent = () => {
  return (
    <div className="text-center">
      <a
        href="#info "
        tabIndex={0}
        role="button"
        className="absolute max-w-xs w-full bg-primario-20 h-0 mx-auto z-0 text-white -top-20 left-0 right-0 block focus:h-auto focus:text-inherit focus:top-0 focus:left-0 focus:right-0 focus:z-10"
        aria-label="Saltar a contenido principal"
      >
        Saltar al contenido principal
      </a>
    </div>
  );
};
