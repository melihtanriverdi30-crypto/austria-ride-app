export const AIRPORT_FARES = [
  { origin: 'Zell am See', airport: 'salzburg', price: 220 },
  { origin: 'Kaprun', airport: 'salzburg', price: 240 },
  { origin: 'Saalbach', airport: 'salzburg', price: 240 },
  { origin: 'Leogang', airport: 'salzburg', price: 240 },
  { origin: 'Maria Alm', airport: 'salzburg', price: 240 },
  { origin: 'region', airport: 'innsbruck', price: 450 },
  { origin: 'region', airport: 'vienna', price: 800 },
] as const;
export const BASE_PASSENGERS = { min: 1, max: 4 } as const;
export const ADDITIONAL_PERSON_FARE = 15;
