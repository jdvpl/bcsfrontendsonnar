export interface ParseScore {
  qualify: string;
  subtitle: string;
}

export const PARSE_SCORE: ParseScore[] = [
  { qualify: 'Muy mala', subtitle: '¿Qué salió mal?' },
  { qualify: 'Regular', subtitle: '¿Qué salió mal?' },
  { qualify: 'Buena', subtitle: '¿Qué salió mal?' },
  { qualify: 'Muy Buena', subtitle: '¿Qué podemos mejorar?' },
  { qualify: 'Excelente', subtitle: '¿Qué podemos mejorar?' },
];

export interface RatingsOptions {
  id: string;
  value: string;
}

export const RATING_OPTIONS: RatingsOptions[] = [
  {
    id: '1',
    value: 'Proceso muy largo',
  },
  {
    id: '2',
    value: 'No me dió confianza',
  },
  {
    id: '3',
    value: 'No entendí qué debía hacer',
  },
  {
    id: '4',
    value: 'Faltó acompañamiento',
  },
  {
    id: '5',
    value: 'Otro',
  },
];

export const RATING_OPTIONS_BETTER: RatingsOptions[] = [
  {
    id: '1',
    value: 'Tiempo de proceso',
  },
  {
    id: '2',
    value: 'Seguridad',
  },
  {
    id: '4',
    value: 'Tener un canal de acompañamiento',
  },
  {
    id: '3',
    value: 'Lenguaje',
  },
  {
    id: '5',
    value: 'Otro',
  },
];

export const cardTextStyles = 'text-[20px] pl-[23px] font-semibold font-poppinsSemiBold';
