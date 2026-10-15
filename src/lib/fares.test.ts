import { describe, expect, test } from 'bun:test';
import { AIRPORT_FARES, BASE_PASSENGERS, ADDITIONAL_PERSON_FARE } from './fares';
import { COMPANY } from './config';

describe('Supplied Alpina Taxi fares', () => {
  test('Zell am See to Salzburg costs 220 euros', () => expect(AIRPORT_FARES.find(f => f.origin === 'Zell am See' && f.airport === 'salzburg')?.price).toBe(220));
  for (const origin of ['Kaprun', 'Saalbach', 'Leogang', 'Maria Alm']) {
    test(`${origin} to Salzburg costs 240 euros`, () => expect(AIRPORT_FARES.find(f => f.origin === origin && f.airport === 'salzburg')?.price).toBe(240));
  }
  test('Regional Innsbruck fare is 450 euros', () => expect(AIRPORT_FARES.find(f => f.origin === 'region' && f.airport === 'innsbruck')?.price).toBe(450));
  test('Regional Vienna fare is 800 euros', () => expect(AIRPORT_FARES.find(f => f.origin === 'region' && f.airport === 'vienna')?.price).toBe(800));
  test('Base fare covers 1–4 persons', () => expect(BASE_PASSENGERS).toEqual({ min: 1, max: 4 }));
  test('Additional-person supplement is 15 euros', () => expect(ADDITIONAL_PERSON_FARE).toBe(15));
  test('Phone destination uses supplied number', () => expect(COMPANY.phoneHref).toBe('+436605252515'));
  test('WhatsApp uses the same supplied number', () => expect(COMPANY.whatsapp).toBe('436605252515'));
  test('Email requests go to supplied mailbox', () => expect(COMPANY.email).toBe('alpinataxi2022@gmail.com'));
});
