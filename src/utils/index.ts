import { differenceInYears, parse } from 'date-fns';

export const clearSessionStorage = () => {
    sessionStorage.clear();
}

export const convertToColombianPesos = (value: any) => {
    const peso = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    });
    if (value === 0 || value === undefined || value === '0' || value === '00' || value === '') return '';
    return peso.format(value);
};
export const calculateAge = (dob: string): number => {
    const date = parse(dob, 'dd/MM/yyyy', new Date());
    return differenceInYears(new Date(), date);
};