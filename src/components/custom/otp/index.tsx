import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input-rc-17';
import { Icons } from '../../ui';

export const Otp = () => {
  const [otp, setOtp] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [time, setTime] = useState<number>(60);

  useEffect(() => {
    if (otp?.length === 6) {
      setIsValid(true);
    }
  }, [otp]);

  useEffect(() => {
    // setTimeout(() => {
    //   setTime((prevTime) => prevTime - 1);
    // }, 1000);
  }, []);

  return (
    <div className="w-scren flex flex-col items-center mt-20">
      <h4 id="title" className="font-semibold text-[20px] text-primario-900 text-center">
        Ingrese el código <br className="block md:hidden " />
        enviado por sms a su <br className="md:hidden lg:block" /> celular&nbsp;
        <h4 className="font-extrabold">
          +57 31*****57
          {/* {dataTU?.encriptPhone?.encriptPhone} */}
        </h4>
      </h4>
      <br />
      <div className="my-5 text-normal">
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
      <p className="text-complementario-60 text-[14px]">Volver a enviar código en </p>
      <p>
        <Icons icon="bcs-clock" size="text-center text-[14px]" /> {time} Segundos
      </p>
      <br />
      {/* <div className={`${isValid ? 'bg-verde-70 ' : 'bg-rojo-70 '} rounded-full p-2`}>
        <Icons
          icon={`${isValid ? 'bcs-check' : 'bcs-close'}`}
          size="text-white text-[20px]"
        />
      </div> */}
    </div>
  );
};
