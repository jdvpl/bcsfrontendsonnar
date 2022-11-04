import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import OtpInput from 'react-otp-input-rc-17';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import { routes } from '../../../routes';
import { validateOTOCode } from '../../../services';
import { Icons } from '../../ui';
import Typography from '../../ui/Tipography';

export interface ValidateOTC {
  pin: string;
  document_number: String;
  document_type: String;
}

export const Otp = () => {
  const [dataTU, setDataUser] = useSessionStorage('dataTU', '');
  const [otp, setOtp] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(10);
  const [error, setError] = useState<boolean>(false);
  const [wasResend, setWasResend] = useState<boolean>(false);
  const intervalRef = useRef<number>();
  const router = useRouter();

  const onValidateOTP = async () => {
    const body: ValidateOTC = {
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

  const onResendOTP = () => {
    if (timer === 0 && !wasResend) {
      setWasResend(true);
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
    <div className="w-scren flex flex-col items-center">
      <h4
        id="title"
        className="font-semibold text-[20px] text-primario-900 text-center mt-[40px] mb-[36px]  md:mt-[64px]  md:mb-[52px] lg:mb-[36px]"
      >
        Ingrese el código enviado por <br /> sms a su celular +57
        {dataTU?.encriptPhone?.encriptPhone && dataTU?.encriptPhone?.encriptPhone}
      </h4>

      <div className="text-normal mb-[16px]">
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
            boxShadow: '0px 0px 3px 2px rgba(3, 134, 230, 0.25)',
          }}
          inputStyle={{
            width: '43px',
            height: '54px',
            margin: '0px 3px',
            fontSize: '36px',
            fontWeight: 500,
            fontColor: '#000000',
            borderRadius: 6,
            border: '1px solid #C4D1DA',
          }}
        />
      </div>

      <div className="w-[33px] h-[33px] bg-primario-20 mb-[16px]"></div>

      <Typography
        onClick={onResendOTP}
        variant={'caption1'}
        className={`${
          timer === 0 && wasResend === false
            ? 'text-primario-20 cursor-pointer'
            : 'text-gris-200'
        } mb-[16px]`}
      >
        {timer === 0 && wasResend === false
          ? 'Volver a enviar código'
          : 'Volver a enviar código en'}
      </Typography>

      {timer === 0 && wasResend === true ? null : (
        <div className="flex justify-center items-center gap-1">
          <Icons icon="bcs-clock" size="text-gris-30 font-semibold" />
          <Typography variant="caption2" className="text-gris-30 font-semibold">
            {timer} segundos
          </Typography>
        </div>
      )}
    </div>
  );
};
