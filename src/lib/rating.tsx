export interface ParseScore {
  qualify: string;
  subtitle: string;
}

export const PARSE_SCORE: ParseScore[] = [
  { qualify: 'Muy mala', subtitle: '¿Qué salió mal?' },
  { qualify: 'Regular', subtitle: '¿Qué salió mal?' },
  { qualify: 'Buena', subtitle: '¿Qué salió mal?' },
  { qualify: 'Muy Buena', subtitle: 'Escriba su comentario' },
  { qualify: 'Excelente', subtitle: 'Escriba su comentario' },
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
    value: 'Faltó acompañamiento',
  },
  {
    id: '4',
    value: 'No entendí qué debía hacer ',
  },
  {
    id: '5',
    value: 'Otro',
  },
];
