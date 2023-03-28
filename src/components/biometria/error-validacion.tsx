import Link from 'next/link';
import router from 'next/router';
import React from 'react';
import ErrorImageDesktop from '../icons/errorImageValidationDesktop';
import QRPage from '../icons/errorQR';
import LogoBcs from '../svg/LogoBcs';
import LogoForm from '../svg/LogoForm';
import Icons from '../ui/icons';

const ValidationMessageBiometry: React.FC = () => (
  <section itemScope itemType="https//schema.org/Action">
    <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] mb-5 lg:justify-between justify-between">
      <div className="mt-4 hidden lg:block">
        <LogoBcs />
      </div>
      <div
        className="xs:block sm:block lg:hidden mt-4 cursor-pointer"
        onClick={() => router.back()}
        data-testid="getbackRouteTest"
      >
        <Icons icon="bcs-icon-44" size="text-[1.2rem]" />
      </div>
      <div className="mt-4 w-[180px] md:w-[180px] lg:w-[280px]">
        <LogoForm />
      </div>
    </div>
    <div data-testid="error-biometria" className="flex justify-center ">
      <ErrorImageDesktop />
    </div>
    <div role="tabpanel" tabIndex={0}>
      <h1 className="text-center mt-[52px] text-primario-900" itemProp="error">
        Validación no exitosa
      </h1>
      <p
        className="text-center text-[18px] leading-[20px]  font-light text-primario-900 lg:-mx-[8px] mt-[6px]"
        itemProp="error"
      >
        Por favor intente nuevamente desde su celular.
      </p>
    </div>
    <div
      tabIndex={0}
      role="img"
      aria-label="Código QR"
      className="flex justify-center mt-[44px] mb-7"
    >
      <QRPage />
    </div>
    <div role="tabpanel" tabIndex={0}>
      <p
        className="text-center text-[18px] leading-[20px]  font-normal text-primario-900 mb-[34px]"
        itemProp="actionStatus"
      >
        Escanee el código QR, o ingrese a este link <br />
        <span>
          <Link href="/">
            <a
              href="https://digital.bancocajasocial.com/vivienda"
              className="text-primario-20"
              rel="noreferrer"
              tabIndex={0}
              role="link"
              aria-label="Ir a la página de inicio del banco caja social"
            >
              https://digital.bancocajasocial.com/vivienda
            </a>
          </Link>
        </span>
        desde su celular
      </p>
    </div>
  </section>
);

export default ValidationMessageBiometry;
