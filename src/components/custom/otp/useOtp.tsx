import { routes } from '../../../routes';
import { OTPCodeRequest, ValidateOTC } from './index';

export default function useOtp({
  setIsLoading,
  dataTU,
  otp,
  setIsValid,
  setError,
  wasResend,
  setWasResend,
  timer,
  router,
  validateOTOCode,
  reSendOTPCode,
  dataQuestions,
  otc,
  setCurrentRouting,
  basicDataUser
}: any) {
  const onValidateOTP = async () => {
    setIsLoading(true);
    const body: ValidateOTC = {
      document_number: dataTU?.document_number,
      document_type: dataTU?.document_type,
      pin: otp,
      processId: dataQuestions.processId,
      otc,
      phone: basicDataUser?.cellPhone
    };
    const response = await validateOTOCode(body);
    if (!response.error) {
      setIsValid(true);
      setIsLoading(false);
      setCurrentRouting(routes.otp, false);
      setCurrentRouting(routes.otc, false);
      setCurrentRouting(routes.personalData);
      router.push(routes.personalData);
    } else {
      setError(true);
      setIsLoading(false);
    }
  };

  const onResendOTP = async () => {
    if (timer === 0 && !wasResend) {
      setIsLoading(true);
      const body: OTPCodeRequest = {
        document_number: dataTU?.document_number,
        document_type: dataTU?.document_type,
        phone: basicDataUser?.cellPhone,
        processId: dataQuestions.processId,
        otc,
        emailAddr: basicDataUser?.email,
      };
      const response = await reSendOTPCode(body);
      if (!response.error) {
        setWasResend(true);
      }
      setIsLoading(false);
    }
  };

  return { onValidateOTP, onResendOTP };
}
