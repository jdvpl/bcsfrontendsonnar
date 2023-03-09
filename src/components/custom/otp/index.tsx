import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef, FC } from 'react';
import OtpInput from 'react-otp-input-rc-17';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../../session';
import { Icons } from '../../ui/icons';
import { OTLoader } from '../../ui/Loaders/OTPloader';
import Typography from '../../ui/Typography';
import useOtp from './useOtp';
import { reSendOTPCode, validateOTOCode } from '../../../services';
import useProtectedRoutes from '../../../hooks/useProtectedRoutes';

interface otpProps {
  otc?: boolean;
}
export interface ValidateOTC {
  pin: string;
  document_number: string;
  document_type: string;
  processId: string;
  otc?: boolean;
  phone?: string;
  emailAddr: string;
}
export interface OTPCodeRequest {
  document_type: string;
  document_number: string;
  phone: string;
  processId: string;
  otc?: boolean;
  emailAddr: string;
}

const Otp: FC<otpProps> = ({ otc }) => {
  const [dataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [otp, setOtp] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const [error, setError] = useState<boolean>(false);
  const [wasResend, setWasResend] = useState<boolean>(false);
  const intervalRef = useRef<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [basicDataUser] = useSessionStorage(SesionStorageKeys.basicDataUser.key, '');
  const { setCurrentRouting } = useProtectedRoutes();

  const { onValidateOTP, onResendOTP } = useOtp({
    setIsLoading,
    dataTU,
    otp,
    setIsValid,
    setError,
    wasResend,
    setWasResend,
    timer,
    router,
    reSendOTPCode,
    validateOTOCode,
    dataQuestions,
    otc,
    setCurrentRouting,
    basicDataUser
  });
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
        className="font-semibold text-[20px] text-primario-900 text-center mt-[40px] mb-[36px]  md:mt-[64px]  md:mb-[52px] lg:mb-[36px] font-poppinsSemiBold"
        data-testid="h4OtpText"
      >
        {
          otc ? <span>Ingrese el código enviado  a su <br />celular y correo electrónico</span> : <span>
            Ingrese el código enviado por <br /> sms a su celular +57
            {dataTU?.encriptPhone?.encriptPhone ? dataTU?.encriptPhone?.encriptPhone : ''}
          </span>
        }
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

      {(isLoading || error || isValid) && (
        <div className={`"w-[33px] h-[48px] mb-[24px]" flex flex-col items-center`}>
          {isLoading && <OTLoader />}
          {error && (
            <div className="w-[294px] h-[28px] bg-[#ffd4ce40] px-[9px] py-[8px] flex items-center rounded-[4px]">
              <Icons icon="bcs-advertising" size="text-rojo-200 mr-[10px]" />
              <Typography
                variant="caption4"
                className="font-normal text-rojo-200 text-[12px] font-montserratRegular"
              >
                Código inválido, intente nuevamente
              </Typography>
            </div>
          )}
          {isValid && (
            <div>
              <div className="bg-verde-70  h-[48px] w-[48.22px] flex items-center justify-center rounded-full">
                <Icons icon="bcs-check" size="text-white" />
              </div>
            </div>
          )}
        </div>
      )}
      {!wasResend && !isValid && (
        <Typography
          onClick={onResendOTP}
          variant="caption1"
          className={`text-[14px] font-montserratRegular leading-4 ${timer === 0 && wasResend === false
            ? 'text-primario-20 cursor-pointer'
            : 'text-gris-200'
            } mb-[12px]`}
        >
          {timer === 0 && wasResend === false
            ? 'Volver a enviar código'
            : 'Volver a enviar código en'}
        </Typography>
      )}

      {timer === 0 || isValid ? null : (
        <div className="flex justify-center items-center gap-1">
          <Icons icon="bcs-clock" size="text-gris-30 font-semibold" />
          <Typography variant="caption2" className="text-gris-30 font-semibold font-montserratRegular">
            {timer} segundos
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Otp;