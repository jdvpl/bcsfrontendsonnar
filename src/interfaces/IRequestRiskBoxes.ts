export interface RequestRiskBoxes {
  creditData: CreditData;
  financialData: FinancialData;
  personalData: RequestRiskBoxesPersonalData;
  dataTu: DataTu;
  processId?: string;
}

export interface CreditData {
  typeHouse: string;
  houseStatus: string;
  houseValue: string;
  financeValue: number;
  termFinance: number;
  insuranceCheck: boolean;
  choseOffice: boolean;
  office: Office;
  stratum: number;
  houseCity: any;
}

export interface Office {
  idOffice: string;
  nameOffice: string;
  Zone: string;
  city: string;
  address: string;
  idCity: string;
  parentid: string;
}

export interface DataTu {
  policy_and_terms: boolean;
  commercial_terms: boolean;
  document_type: string;
  document_number: string;
  encriptPhone: EncriptPhone;
  personalData: DataTuPersonalData;
  advisoryType: string;
  otherAdvisoryType: null;
}

export interface EncriptPhone {
  encriptPhone: string;
}

export interface DataTuPersonalData {
  celular: string;
  phoneNumber: string;
}

export interface FinancialData {
  occupation: string;
  monthlySalary: string;
  monthlyExpenses: string;
  realStateValue: string;
  debtValue: string;
  enterprise: string;
  contractType: string;
  employeeYear: string;
  employeeMonth: string;
}

export interface RequestRiskBoxesPersonalData {
  middleName: string;
  secondLastName: string;
  isClient: boolean;
  firstName: string;
  lastName: string;
  documentNumber: string;
  documentType: string;
  email: string;
  cellPhone: string;
  phone: string;
  address: string;
  birthDate: string;
  birthCity: string;
  currentCity: string;
  hasAdviser: boolean;
  nameAdviser: string;
  gender: string;
  currentAddress: string;
  age: number;
}
