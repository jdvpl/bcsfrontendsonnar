
import { convertToColombianPesos } from '../utils';
import { getPDF } from '../services';
import { iCreditData } from './../interfaces/iCreditData';
import { routes } from '../routes';
import { iPersonalDataSent } from "../interfaces/dataUserBasic";
import { iPersonalDataResponse } from '../interfaces/iPersonalDataResponse';

export default function useDownloadPdf(
  dataQuestions: any,
  dataTU: any,
  valuesMortgage: Partial<iCreditData>,
  applicationResponse: any,
  setCurrentRouting: any,
  router: any,
  dataPersonalBasic: Partial<iPersonalDataSent>,
  setLoading: (data: boolean) => void,
  basicDataUser: Partial<iPersonalDataResponse>,
  setPdfData: any
) {
  const getPdf = async () => {
    setLoading(true);
    const response = await getPDF({
      processId: dataQuestions.processId,
      documentNumber: dataTU.document_number,
      documentType: dataTU.document_type,
      maxAmount: convertToColombianPesos(applicationResponse?.finalOffer?.offer?.financeValue),
      amortizationType: valuesMortgage.amortizationType,
      termFinance: applicationResponse?.finalOffer?.offer?.termFinance?.toString(),
      gender: dataPersonalBasic.gender,
      email: dataPersonalBasic.email,
      fullName: basicDataUser.isClient ? basicDataUser.fullName : basicDataUser.firstName + " " + basicDataUser.lastName
    })
    if (!response.error) {
      setPdfData(response.response?.result)
      setCurrentRouting(routes.approvalDataPage);
      router.push(routes.approvalDataPage);
      setLoading(false);

    }
  };
  return { getPdf };
}
