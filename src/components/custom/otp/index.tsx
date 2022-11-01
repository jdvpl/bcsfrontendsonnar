import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import OtpInput from 'react-otp-input-rc-17';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import { routes } from '../../../routes';
import { validateOTOCode } from '../../../services';
import { Icons } from '../../ui';

export const Otp = () => {
  const [dataTU, setDataUser] = useSessionStorage('dataTU', '');
  const [otp, setOtp] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const [error, setError] = useState<boolean>(false);
  const intervalRef = useRef<number>();
  const router = useRouter();

  const onValidateOTP = async () => {
    const body = {
      document_number: dataTU?.document_number,
      document_type: dataTU?.document_type,
      pin: otp,
    };
    const response = await validateOTOCode(body);
    if (!response.error) {
      setIsValid(true);
      // setDataQuestions(response.response.data);
      setTimeout(() => {
        router.push(routes.ratings);
      }, 3000);
    } else {
      setError(true);
      console.log(response);
    }
  };

  useEffect(() => {
    if (otp?.length === 6) {
      onValidateOTP();
    } else {
      setError(false);
    }
  }, [otp]);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [setTimer, timer]);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [timer]);

  return (
    <div className="w-scren flex flex-col items-center mt-20">
      <h4
        id="title"
        className="font-semibold text-[20px] text-primario-900 text-center mb-[36px]"
      >
        Ingrese el código <br className="block md:hidden " />
        enviado por sms a su <br className="md:hidden lg:block" /> celular &nbsp;
        <span className="font-extrabold">
          +57{dataTU?.encriptPhone?.encriptPhone && dataTU?.encriptPhone?.encriptPhone}
        </span>
      </h4>
      <div className="text-normal mb-[24px]">
        <OtpInput
          className="otp-div"
          value={otp}
          onChange={(e: string) => setOtp(e)}
          numInputs={6}
          // isDisabled={complete || isLoading || disabled}
          isInputNum
          shouldAutoFocus
          data-testid="otp-input"
          focusStyle={{
            outline: 'none',
            border: '1px solid #005491',
          }}
          inputStyle={
            200 <= 370
              ? {
                  width: '43px',
                  height: '54px',
                  margin: '0px 3px',
                  fontSize: '36px',
                  fontWeight: 500,
                  fontColor: '#000000',
                  borderRadius: 6,
                  border: '1px solid #C4D1DA',
                }
              : {
                  width: '52px',
                  height: '64px',
                  margin: '0px 3px',
                  fontSize: '36px',
                  fontWeight: 500,
                  fontColor: '#000000',
                  borderRadius: 6,
                  border: '1px solid #C4D1DA',
                }
          }
        />
      </div>
      {isValid ||
        (error && (
          <>
            <div
              className={`${
                isValid ? 'bg-verde-70 ' : 'bg-rojo-70 '
              } rounded-full p-2 mb-5`}
            >
              <Icons
                icon={`${isValid ? 'bcs-check' : 'bcs-close'}`}
                size="text-white text-[20px]"
              />
            </div>
          </>
        ))}
      {isValid === false && (
        <>
          {timer > 0 ? (
            <>
              <p className="text-complementario-60 text-[14px]">
                Volver a enviar código en{' '}
              </p>
              <p>
                <Icons icon="bcs-clock" size="text-center text-[14px]" /> {timer} Segundos
              </p>
            </>
          ) : (
            <div className="text-center w-full ">
              <button
                id="reSend"
                type="button"
                // disabled={isLoading || !buttonDisabled || resend2 === 'true'}
                className={`text-center cursor-pointer  fz-16  text-primario-20 text-base leading-[14px] -tracking-[0.2px] font-semibold
                  disabled:text-azul_gris-40 disabled:font-normal disabled:text-sm disabled:leading-[18px]`}
                // onClick={() => {
                //   getCode();
                // }}
              >
                <span id="reSend">Volver a enviar código</span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
