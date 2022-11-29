import Link from 'next/link';
import React from 'react';
import { ErrorImageDesktop } from "../icons/errorImageValidationDesktop";
import { QRPage } from "../icons/errorQR";

const ValidationMessageBiometry: React.FC = () => (
    <section itemScope itemType="https//schema.org/Action">
      <div data-testid="error-biometria" className="flex justify-center ">
        <ErrorImageDesktop />
      </div>
      <h1
        tabIndex={0}
        role="paragraph"
        className="text-center mt-[52px] text-primario-900"
        itemProp="error"
      >
        Validación no exitosa
      </h1>
      <p
        tabIndex={0}
        role="paragraph"
        className="text-center text-[18px] leading-[20px]  font-light text-primario-900 lg:-mx-[8px] mt-[6px]"
        itemProp="error"
      >
        Por favor intente nuevamente <br className="block md:hidden" /> desde su celular.
      </p>
      <div
        tabIndex={0}
        role="img"
        aria-label="Código QR"
        className="flex justify-center mt-[44px] mb-7"
      >
        <QRPage />
      </div>
      <p
        tabIndex={0}
        role="paragraph"
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
        <br />
        desde su celular
      </p>
    </section>
  );

export default ValidationMessageBiometry
