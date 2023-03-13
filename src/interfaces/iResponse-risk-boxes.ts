export interface ResponseRiskBoxes {
  customerStatus: CustomerStatus;
  orderNumber: string;
}
export interface CustomerStatus {
  finalOffer: FinalOffer;
  status: number;
}
export interface FinalOffer {
  isViable: boolean;
  offer?: Offer;
}
export interface Offer {
  financeValue: number;
  monthlyInstallment: number;
  rate: string;
  termFinance: number;
  lifeInsurance: string;
  fireInsurance: string;
  message: string;
}
