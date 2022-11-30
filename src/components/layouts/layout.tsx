import React, { useState } from 'react';
import { motion } from 'framer-motion';

import LogoBcs from '../svg/LogoBcs';
import { childrenProps } from '../../interfaces';
import LogoForm from '../svg/LogoForm';

interface LayoutProps extends childrenProps {
  className?: string;
  navTitle?: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ className, navTitle, children }) => {
  const initialState = {
    hidden: { opacity: 1, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0 },
  };
  const [variants] = useState(initialState);

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      data-testid="animation-layout"
    >
      <section tabIndex={0} role="tabpanel" className="bg-white">
        <div className={`${className || 'bg-white '} min-h-screen`}>
          <header className="hidden lg:flex pt-[60px] min-h-[100px] md:w-full lg:justify-center lg:pb-6">
            <div
              className="lg:w-[1160px] lg:max-w-[100%] mx-4  flex justify-between items-baseline"
              itemScope
              itemType="http://schema.org/Organization"
              itemProp="logo"
            >
              <LogoBcs />
              <LogoForm />
            </div>
          </header>
          <main className="flex flex-col px-[16px] pt-[40px] md:pt-0 sm:px-[16px] md:px-[30px] max-w-full lg:pt-0 md:justify-center items-center self-start md:self-center text w-full lg:min-h-[100%] lg:h-full">
            <div className="w-full h-full max-w-[343px] md:min-w-[528px] lg:min-w-[684px]">
              <div className="flex lg:hidden">{navTitle}</div>
              {children}
            </div>
          </main>
        </div>
      </section>
    </motion.div>
  );
};
