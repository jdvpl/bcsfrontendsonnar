export interface iDataUser {
  birthDay: string,
  cellPhone: string,
  email: string,
  address: string,
  birthCity: string,
  firstName: string,
  isClient: boolean,
  residenceCity: string,
}

export interface iPersonalData {
  monthDt: string;
  yearDt: string;
  dayDt: string;
  birthCity: any;
  gender: string;
  phone: string;
  email: string;
  currentCity: any;
  currentAddress: string;
}

export interface iPersonalDataSent {
  birthDate: string;
  birthCity: string;
  currentCity: string;
  hasAdviser: boolean;
  nameAdviser: string;
  phone: string;
  gender: string;
  currentAddress: string;
  email: string;
}