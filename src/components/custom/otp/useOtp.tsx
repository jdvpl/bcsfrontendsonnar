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
}: any) {
  const onValidateOTP = async () => {
    setIsLoading(true);
    const body: ValidateOTC = {
      document_number: dataTU?.document_number,
      document_type: dataTU?.document_type,
      pin: otp,
    };
    const response = await validateOTOCode(body);
    if (!response.error) {
      setIsValid(true);
      setIsLoading(false);
      setTimeout(() => {
        router.push(routes.personalData);
      }, 3000);
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
        phone: dataTU?.personalData?.phoneNumber,
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
